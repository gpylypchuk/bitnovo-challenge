import React, { useEffect } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { COLORS } from "../../constants";
import Context from "../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faQrcode, faMailForward } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { API_URL, DEVICE_ID } from "../../constants";

export default function Compartir({ navigation }) {
  const { context, setContext } = React.useContext(Context);

  const initialState = {
    mailOnFocus: false,
    whatsappOnFocus: false,
  };

  const [state, setState] = React.useState(initialState);

  let ws;

  const BODY_SAMPLE = {
    expected_output_amount: context.amount,
    input_currency: "ETH_TEST3",
    fiat: context.currency,
  };

  const fetchPayLink = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Device-Id": DEVICE_ID,
      },
      body: JSON.stringify(BODY_SAMPLE),
    };

    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();

    setContext({
      ...context,
      payLink: data.web_url,
      identifier: data.identifier,
    });

    ws = await new WebSocket(
      `wss://payments.smsdata.com/ws/merchant/${data.identifier}`
    );

    ws.onmessage = (event) => {
      if (event.isTrusted === true) {
        navigation.navigate("PagoProcesado");
      }
    };
  };

  useEffect(() => {
    if (context.amount !== "") {
      fetchPayLink();
    }
  }, []);

  const styles = StyleSheet.create({
    newPayment: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
    },
    shareText: {
      fontSize: 16,
      fontWeight: "400",
      color: COLORS.button,
    },
    buttonShare: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 6,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 18,
      paddingBottom: 18,
      borderColor: COLORS.button,
      borderWidth: 1,
      width: 354,
      height: 56,
      marginTop: 25,
    },
    buttonPasarela: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 6,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 18,
      paddingBottom: 18,
      backgroundColor: COLORS.button,
      width: 354,
      height: 56,
      marginTop: 100,
    },
    squareQr: {
      borderColor: COLORS.lightgray,
      borderWidth: 2,
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      marginLeft: 30,
    },
    squareMail: {
      flexDirection: "row",
      borderColor: state.mailOnFocus ? COLORS.button : COLORS.lightgray,
      borderWidth: 2,
      borderRadius: 6,
      alignItems: "left",
      width: "85%",
    },
    squareWhatsapp: {
      flexDirection: "row",
      borderColor: state.whatsappOnFocus ? COLORS.button : COLORS.lightgray,
      borderWidth: 2,
      borderRadius: 6,
      alignItems: "left",
      width: "85%",
    },
    onFocusSend: {
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: "auto",
      marginRight: 10,
      color: COLORS.button,
    },
    WhatsappIcon: {
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: 10,
    },
    linkQr: {
      fontSize: 18,
      fontWeight: "400",
      color: COLORS.textGray,
      alignSelf: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    mail: {
      fontSize: 18,
      fontWeight: "400",
      color: COLORS.textGray,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    whatsapp: {
      fontSize: 18,
      fontWeight: "400",
      color: COLORS.textGray,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    container: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 80, // fix
    },
    amountToPay: {
      fontSize: 25,
      fontWeight: "bold",
      color: COLORS.text,
      textAlign: "center",
      marginBottom: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: "400",
      color: COLORS.textGray,
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: "400",
      color: COLORS.textGray,
      marginBottom: "10%",
      maxWidth: "80%",
      textAlign: "center",
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
      justifyContent: "center",
      marginBottom: "10%",
    },
    buttonQR: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 6,
      padding: 16,
      backgroundColor: COLORS.button,
      marginRight: 30,
    },
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: context.isModalOpen ? COLORS.lightgray : COLORS.white,
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Solicitud de pago</Text>
        <Text style={styles.amountToPay}>
          {context.amount === ""
            ? "0"
            : context.amount === "."
            ? "0."
            : context.amount}

          {context.currency === "EUR"
            ? " €"
            : context.currency === "GBP"
            ? " £"
            : context.currency === "USD"
            ? " $"
            : ""}
        </Text>

        <Text style={styles.subtitle}>
          Muéstrale el QR al cliente o comparte el enlace de pago.
        </Text>

        <View style={styles.row}>
          <View style={styles.squareQr}>
            <Text style={styles.linkQr}>{context.payLink.slice(0, 26)}...</Text>
          </View>
          <Pressable
            style={styles.buttonQR}
            onPress={() => navigation.navigate("QrCode")}
          >
            <FontAwesomeIcon icon={faQrcode} size={15} color={COLORS.white} />
          </Pressable>
        </View>

        <View style={styles.row}>
          <View style={styles.squareMail}>
            <FontAwesomeIcon
              icon={faMailForward}
              size={30}
              style={styles.WhatsappIcon}
              color="#035AC5"
            />
            <TextInput
              keyboardType="email-address"
              onFocus={() =>
                setState({ whatsappOnFocus: false, mailOnFocus: true })
              }
              placeholder="geronimo@gmail.com"
              style={styles.mail}
            ></TextInput>
            {state.mailOnFocus && (
              <Pressable style={styles.onFocusSend}>
                <Text style={styles.onFocusSend}>Enviar</Text>
              </Pressable>
            )}
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.squareWhatsapp}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              size={30}
              style={styles.WhatsappIcon}
              color="#25D366"
            />
            <TextInput
              keyboardType="numeric"
              textContentType="number"
              onFocus={() =>
                setState({ whatsappOnFocus: true, mailOnFocus: false })
              }
              placeholder="Enviar por Whatsapp"
              style={styles.whatsapp}
            ></TextInput>
            {state.whatsappOnFocus && (
              <Pressable style={styles.onFocusSend}>
                <Text style={styles.onFocusSend}>Enviar</Text>
              </Pressable>
            )}
          </View>
        </View>

        <View>
          <Pressable
            style={styles.buttonPasarela}
            onPress={() => navigation.navigate("Inicio")}
          >
            <Text style={{ color: COLORS.white, fontSize: 18 }}>
              Ir a pasarela →
            </Text>
          </Pressable>
        </View>

        <View>
          <Pressable
            style={styles.buttonShare}
            onPress={() => navigation.navigate("Inicio")}
          >
            <Text style={styles.shareText}>Compartir 📩</Text>
          </Pressable>
        </View>

        <View>
          <Pressable
            style={styles.newPayment}
            onPress={() => navigation.navigate("Inicio")}
          >
            <Text style={styles.shareText}>Solicitar nuevo pago</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

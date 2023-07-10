import React, { useEffect } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { COLORS } from "../../constants";
import Context from "../context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../../constants";

export default function Compartir({ navigation }) {
  const { context, setContext } = React.useContext(Context);

  const initialState = {
    mailOnFocus: false,
    whatsappOnFocus: false,
  };

  const [state, setState] = React.useState(initialState);

  const BODY_SAMPLE = {
    expected_output_amount: context.amount,
    input_currency: "ETH_TEST3",
  };

  const fetchPayLink = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Device-Id": "7c519494-a87a-4760-942f-4257205896de",
      },
      body: JSON.stringify(BODY_SAMPLE),
    };
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    setContext({
      ...context,
      payLink: data.web_url,
    });
    console.log(data);
  };

  useEffect(() => {
    if (context.amount !== "") {
      fetchPayLink();
    }
  }, [context.amount]);

  const styles = StyleSheet.create({
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
      borderColor: state.mailOnFocus ? COLORS.button : COLORS.lightgray,
      borderWidth: 2,
      borderRadius: 6,
      alignItems: "left",
      width: "85%",
    },
    squareWhatsapp: {
      borderColor: state.whatsappOnFocus ? COLORS.button : COLORS.lightgray,
      borderWidth: 2,
      borderRadius: 6,
      alignItems: "left",
      width: "85%",
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
            <Text style={styles.linkQr}>{context.payLink}</Text>
          </View>
          <Pressable
            style={styles.buttonQR}
            onPress={() => navigation.navigate("Inicio")}
          >
            <FontAwesomeIcon icon={faQrcode} size={15} color={COLORS.white} />
          </Pressable>
        </View>

        <View style={styles.row}>
          <View style={styles.squareMail}>
            <TextInput
              onFocus={() =>
                setState({ whatsappOnFocus: false, mailOnFocus: true })
              }
              placeholder="geronimo@gmail.com"
              style={styles.mail}
            ></TextInput>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.squareWhatsapp}>
            <TextInput
              onFocus={() =>
                setState({ whatsappOnFocus: true, mailOnFocus: false })
              }
              placeholder="Enviar a numero de Whatsapp"
              style={styles.whatsapp}
            ></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
}

import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../../constants";
import Context from "../context/Context";
import QRCode from "react-native-qrcode-svg";
import { StatusBar } from "expo-status-bar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export default function QrCode({ navigation }) {
  const { context } = useContext(Context);
  let ws;

  const webSocket = () => {
    ws = new WebSocket(
      `wss://payments.smsdata.com/ws/merchant/${context.identifier}`
    );

    ws.onmessage = (event) => {
      if (event.isTrusted === true) {
        navigation.navigate("PagoProcesado");
      }
    };
  };

  useEffect(() => {
    webSocket();
  }, [context.identifier]);

  return (
    <View style={styles.container}>
      <View style={styles.toast}>
        <FontAwesomeIcon
          icon={faExclamationCircle}
          size={20}
          color={COLORS.white}
        />
        <Text style={styles.textToast}>
          Muestra este QR y será redirigido a la pasarela de pago.{" "}
        </Text>
      </View>
      <View style={styles.qrContainer}>
        <QRCode
          value={context.payLink}
          size={250}
          color={COLORS.primary}
          // logo={require("../../assets/logo-blue.png")}
          logoSize={50}
          backgroundColor={COLORS.white}
        />
        <Text style={styles.textQr}>
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
      </View>
      <Text style={styles.subText}>
        Esta pantalla se actualizará automáticamente.
      </Text>
      <Pressable
        style={styles.buttonPrint}
        onPress={() => navigation.navigate("Compartir")}
      >
        <Text style={styles.textPay}>🖨️ Imprimir</Text>
      </Pressable>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  toast: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginHorizontal: 10,
    marginTop: "0%",
    marginBottom: 20,
    backgroundColor: COLORS.button,
  },
  textToast: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "400",
    color: COLORS.white,
    marginLeft: 10,
  },
  qrContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 6,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: COLORS.white,
  },
  textQr: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: "bold",
    color: COLORS.text,
    marginTop: 25,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "12%",
    backgroundColor: COLORS.text,
  },
  subText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "400",
    color: COLORS.white,
  },
  buttonPrint: {
    backgroundColor: COLORS.button,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: "15%",
  },
  textPay: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

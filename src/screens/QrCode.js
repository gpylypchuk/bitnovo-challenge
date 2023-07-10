import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../../constants";
import Context from "../context/Context";
import QRCode from "react-native-qrcode-svg";

export default function QrCode({ navigation }) {
  const { context } = useContext(Context);

  return (
    <View style={styles.container}>
      <QRCode
        value={context.payLink}
        size={200}
        color={COLORS.primary}
        backgroundColor={COLORS.white}
      />
      <Text style={styles.text}>Escanea el código QR</Text>
      <Text style={styles.subText}>para realizar el pago</Text>
      <Pressable
        style={styles.buttonPay}
        onPress={() => navigation.navigate("Inicio")}
      >
        <Text style={styles.textPay}>Finalizar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  text: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "bold",
    color: COLORS.text,
    marginTop: 20,
  },
  subText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "400",
    color: COLORS.textGray,
    marginTop: 10,
  },
  buttonPay: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: "15%",
  },
  textPay: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "bold",
    color: COLORS.text,
  },
});

import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import Teclado from "../components/Teclado";
import { COLORS } from "../../constants";
import Amount from "../components/Amount";
import Context from "../context/Context";

export default function SolicitarPago({ navigation }) {
  const { context, setContext } = React.useContext(Context);

  const setZero = () => {
    setContext({
      ...context,
      amount: "",
    });
  };

  return (
    <View>
      <Header />
      <Amount />
      <Teclado />
      <Pressable
        style={styles.buttonPay}
        onPress={() => navigation.navigate("Compartir")}
      >
        <Text style={styles.textPay}>Solicitar Pago</Text>
      </Pressable>
      <Pressable style={styles.buttonZero} onPress={() => setZero()}>
        <Text style={styles.textZero}>Reestablecer</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonZero: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginHorizontal: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: COLORS.red,
    marginBottom: "15%",
  },
  textZero: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "bold",
    color: COLORS.red,
  },
  buttonPay: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: COLORS.button,
  },
  textPay: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

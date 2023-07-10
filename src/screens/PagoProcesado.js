import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function PagoProcesado({ navigation }) {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        icon={faCheckCircle}
        size={100}
        color={COLORS.green}
        style={styles.icon}
      />
      <Text style={styles.text}>Pago procesado</Text>
      <Pressable
        style={styles.buttonPay}
        onPress={() => navigation.navigate("Inicio")}
      >
        <Text style={styles.textPay}>Aceptar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  icon: {
    marginTop: "30%",
  },
  text: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "bold",
    color: COLORS.black,
    marginTop: 20,
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
    marginBottom: "15%",
  },
  textPay: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Context from "../context/Context";
import { COLORS } from "../../constants";

export default function Amount() {
  const { context } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.input} placeholderTextColor={COLORS.gray}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: "10%",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
  },
  input: {
    fontSize: 50,
    fontWeight: "bold",
    color: COLORS.text,
    textAlign: "center",
    width: "100%",
  },
});

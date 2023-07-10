import React from "react";
import { View } from "react-native";
import SolicitarPago from "./SolicitarPago";
import Context from "../context/Context";
import { COLORS } from "../../constants";

export default function Inicio({ navigation }) {
  const { context } = React.useContext(Context);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: context.isModalOpen ? COLORS.lightgray : COLORS.white,
      }}
    >
      <SolicitarPago navigation={navigation} />
    </View>
  );
}

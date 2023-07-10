import React from "react";
import { ContextProvider } from "./src/context/Context";
import Inicio from "./src/screens/Inicio";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Compartir from "./src/screens/Compartir";
import SolicitarPago from "./src/screens/SolicitarPago";
import PagoProcesado from "./src/screens/PagoProcesado";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ContextProvider>
        <Stack.Navigator
          screenOptions={
            (Headers = {
              headerShown: false,
            })
          }
        >
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Compartir" component={Compartir} />
          <Stack.Screen name="SolicitarPago" component={SolicitarPago} />
          <Stack.Screen name="PagoProcesado" component={PagoProcesado} />
        </Stack.Navigator>
      </ContextProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

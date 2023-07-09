import React from 'react';
import { ContextProvider } from './src/context/Context';
import Inicio from './src/screens/Inicio';

export default function App() {
  return (
    <ContextProvider>
      <Inicio />
    </ContextProvider>
  );
}

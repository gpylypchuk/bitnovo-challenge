import { createContext, useState } from "react";

const Context = createContext({});

export function ContextProvider({ children }) {
  const initialState = {
    isModalOpen: false,
    currency: "EUR",
    amount: "",
    payLink: "https://www.bitnovo.com/",
    whatsapp: "",
    mail: "",
    identifier: "",
  };

  const [context, setContext] = useState(initialState);

  return (
    <Context.Provider value={{ context, setContext }}>
      {children}
    </Context.Provider>
  );
}

export default Context;

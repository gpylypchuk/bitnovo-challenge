import { createContext, useState } from 'react'

const Context = createContext({})

export function ContextProvider ({ children }) {
  const [context, setContext] = useState({ isModalOpen: false, currency: 'EUR' })
  
  return (
    <Context.Provider value={{ context, setContext }}>
        {children}
    </Context.Provider>
  )
}

export default Context

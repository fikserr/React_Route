import { createContext, useState } from "react"

export const Context = createContext() 


function ContextProvider({children}) {

    const [active,setActive] = useState(false)
  return (
    <Context.Provider value={{active,setActive}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider
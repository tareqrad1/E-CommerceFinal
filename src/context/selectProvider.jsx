/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
export const selectContext = createContext();

const SelectProvider = ({children}) => {
  const [opt, setOpt] = useState(false);
  return (
    <selectContext.Provider value={{opt, setOpt}}>
        {children}
    </selectContext.Provider>
  )
}

export default SelectProvider
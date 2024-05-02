
import { createContext, useContext, useState } from "react"

const ThemeContext = createContext('default')

const ThemeProvider = ({ children }:any) => {
  const [theme, setTheme] = useState('default')
  return (
    <ThemeContext.Provider
      value={theme}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
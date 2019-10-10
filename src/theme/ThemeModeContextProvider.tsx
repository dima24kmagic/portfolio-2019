import React, { ReactNode, useState } from 'react'

export enum ThemeMode {
  DARK,
  LIGHT,
}

export const ThemeModeContext = React.createContext({
  mode: ThemeMode.LIGHT,
  toggleMode: () => {},
})

const ThemeModeContextProvider = ({ children }: { children: ReactNode }) => {
  const currHours = new Date().getHours()
  const [mode, setMode] = useState(
    currHours > 19 || currHours < 6 ? ThemeMode.DARK : ThemeMode.LIGHT,
  )
  const toggleMode = () => {
    setMode(mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT)
  }
  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export default ThemeModeContextProvider

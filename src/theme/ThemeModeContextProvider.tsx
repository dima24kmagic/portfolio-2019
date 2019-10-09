import React, { ReactNode, useState } from 'react'

enum ThemeMode {
  DARK,
  LIGHT,
}

export const ThemeModeContext = React.createContext({
  mode: ThemeMode.LIGHT,
  toggleMode: () => {},
})

const ThemeModeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState(ThemeMode.LIGHT)
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

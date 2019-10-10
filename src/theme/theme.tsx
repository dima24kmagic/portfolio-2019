import React, { useContext } from 'react'
import { ThemeMode, ThemeModeContext } from './ThemeModeContextProvider'

function createModeValue(mode: ThemeMode, lightVal: string, darkVal: string) {
  return mode === ThemeMode.LIGHT ? lightVal : darkVal
}

const getConvertedTheme = (mode: ThemeMode) => {
  return {
    bg: createModeValue(mode, '#f0f0f0', '#000'),
    color: createModeValue(mode, '#000', 'aliceblue'),
    accentColor: createModeValue(mode, 'red', 'hotpink'),
  }
}

export const useTheme = () => {
  const { mode } = useContext(ThemeModeContext)
  return getConvertedTheme(mode)
}

export const useToggleTheme = () => {
  const { toggleMode } = useContext(ThemeModeContext)
  return toggleMode
}

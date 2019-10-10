import React, { useContext } from 'react'
import { ThemeMode, ThemeModeContext } from './ThemeModeContextProvider'

function getModeValue(mode: ThemeMode, lightVal: string, darkVal: string) {
  return mode === ThemeMode.LIGHT ? lightVal : darkVal
}

const getConvertedTheme = (mode: ThemeMode) => {
  return {
    bg: {
      primary: getModeValue(mode, '#f0f0f0', '#000'),
      secondary: getModeValue(mode, '#000', '#a20051'),
    },
    color: {
      primary: getModeValue(mode, '#000', '#f0f0f0'),
      primaryHover: getModeValue(mode, '#00051d', '#fff'),
      secondary: getModeValue(mode, '#f0f0f0', '#d8d8d8'),
      secondaryHover: getModeValue(mode, 'hotpink', '#ffb7ef'),
      accent: getModeValue(mode, 'red', 'hotpink'),
    },
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

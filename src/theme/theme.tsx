import React, { useContext } from 'react'
import { ThemeMode, ThemeModeContext } from './ThemeModeContextProvider'

function getModeValue(mode: ThemeMode, lightVal: string, darkVal: string) {
  return mode === ThemeMode.LIGHT ? lightVal : darkVal
}

const getConvertedTheme = (mode: ThemeMode) => {
  return {
    bg: {
      primary: getModeValue(mode, '#f0f0f0', '#000'),
      secondary: getModeValue(mode, '#050505', '#a20051'),
    },
    color: {
      primary: getModeValue(mode, '#050505', '#f0f0f0'),
      primaryHover: getModeValue(mode, '#00051d', '#fff'),
      secondary: getModeValue(mode, '#f0f0f0', '#f0f0f0'),
      secondaryHover: getModeValue(mode, 'hotpink', '#ff00a6'),
      accent: getModeValue(mode, '#ba004e', 'hotpink'),
      themeColor: getModeValue(mode, '#fff', '#050505'),
    },
    transitionSpeed: '0.5s',
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

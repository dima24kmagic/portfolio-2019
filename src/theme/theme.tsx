import { useContext } from 'react'
import { ThemeMode, ThemeModeContext } from './ThemeModeContextProvider'

function getModeValue(mode: ThemeMode, lightVal: string, darkVal: string) {
  return mode === ThemeMode.LIGHT ? lightVal : darkVal
}

const getConvertedTheme = (mode: ThemeMode) => {
  return {
    bg: {
      primary: getModeValue(mode, '#f6f6f6', '#101010'),
      secondary: getModeValue(mode, '#050505', '#a20051'),
    },
    color: {
      white: '#fcfcfc',
      black: '#050505',
      primary: getModeValue(mode, '#050505', '#f6f6f6'),
      primaryHover: getModeValue(mode, '#00051d', '#fff'),
      secondary: getModeValue(mode, '#f6f6f6', '#f6f6f6'),
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

import { useContext } from 'react'
import { ThemeMode, ThemeModeContext } from './ThemeModeContextProvider'

function getModeValue(mode: ThemeMode, lightVal: string, darkVal: string) {
  return mode === ThemeMode.LIGHT ? lightVal : darkVal
}

export const theme = {
  transitionSpeed: '0.5s',
  breakpoints: {
    xxxl: `@media (max-width: 1420px)`,
    xxl: `@media (max-width: 1360px)`,
    xl: `@media (max-width: 1240px)`,
    l: `@media (max-width: 980px)`,
    md: `@media (max-width: 820px)`,
    sm: `@media (max-width: 580px)`,
    xs: `@media (max-width: 480px)`,
    xxs: `@media (max-width: 360px)`,
  },
}

export const getConvertedTheme = (mode: ThemeMode): typeof theme => {
  return theme
}

export const useTheme = () => {
  const { mode } = useContext(ThemeModeContext)
  return getConvertedTheme(mode)
}

export const useToggleTheme = () => {
  const { toggleMode } = useContext(ThemeModeContext)
  return toggleMode
}

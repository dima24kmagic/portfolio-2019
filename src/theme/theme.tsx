import { useContext } from 'react'
import { ThemeMode, ThemeModeContext } from './ThemeModeContextProvider'

function getModeValue(mode: ThemeMode, lightVal: string, darkVal: string) {
  return mode === ThemeMode.LIGHT ? lightVal : darkVal
}

export const theme = {
  transitionSpeed: '0.5s',
  breakpoints: {
    l: `
        @media (max-width: 980px)
      `,
    md: `
        @media (max-width: 820px)
      `,
    sm: `
        @media (max-width: 360px)
      `,
  },
}

export const getConvertedTheme = (mode: ThemeMode): typeof theme => {
  return {
    transitionSpeed: '0.5s',
    breakpoints: {
      l: `
        @media (max-width: 980px)
      `,
      md: `
        @media (max-width: 980px)
      `,
      sm: `
        @media (max-width: 980px)
      `,
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

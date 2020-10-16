import 'styled-components'
import { getConvertedTheme, theme } from './theme/theme'
import { ThemeMode } from './theme/ThemeModeContextProvider'

type ThemeType = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

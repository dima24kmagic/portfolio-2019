import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { getConvertedTheme } from '../theme/theme'
import { ThemeMode } from '../theme/ThemeModeContextProvider'

interface Props {
  children: ReactElement
}

/**
 * Provide stories to theme and render 2 children
 */
function ProvideStoriesTheme({ children }: Props) {
  const darkTheme = getConvertedTheme(ThemeMode.DARK)
  const lightTheme = getConvertedTheme(ThemeMode.LIGHT)
  return (
    <div>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </div>
  )
}

export default ProvideStoriesTheme

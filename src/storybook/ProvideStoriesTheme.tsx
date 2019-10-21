import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { getConvertedTheme } from '../theme/theme'
import { ThemeMode } from '../theme/ThemeModeContextProvider'
import GlobalStyle from '../App/GlobalStyles'

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
    <div
      style={{
        background: '#fff',
        width: '100%',
        height: '100%',
        overflow: 'auto',
      }}
    >
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </div>
  )
}

export default ProvideStoriesTheme

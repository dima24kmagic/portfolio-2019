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
    <div style={{ overflow: 'auto', height: '100%' }}>
      <div
        style={{
          background: '#fff',
          width: '100%',
          minHeight: '50%',
          overflow: 'auto',
          padding: 36,
        }}
      >
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </div>
      <div
        style={{
          background: '#000',
          width: '100%',
          minHeight: '50%',
          overflow: 'auto',
          padding: 36,
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </div>
    </div>
  )
}

export default ProvideStoriesTheme

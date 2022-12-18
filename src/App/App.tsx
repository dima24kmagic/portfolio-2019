import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider, withTheme } from 'styled-components'
import HomePage from '../pages/Home'
import GlobalStyle from './GlobalStyles'
import { theme } from '../theme/theme'
import RedirectAfterFiveSeconds from '../pages/RedirectAfterFiveSeconds'

/**
 * App
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>
          <RedirectAfterFiveSeconds />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default withTheme(App)

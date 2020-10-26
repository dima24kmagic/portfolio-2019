import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider, withTheme } from 'styled-components'
import HomePage from '../screens/Home'
import GlobalStyle from './GlobalStyles'
import { theme } from '../theme/theme'

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
        <Route path="/contact">
          <div />
        </Route>
        <Route>
          <div>Oops, check your URL, seems this is wrong path;)</div>
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default withTheme(App)

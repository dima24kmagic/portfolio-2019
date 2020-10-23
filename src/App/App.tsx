import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider, withTheme } from 'styled-components'
import AnimatedSwitch from '../components/AnimatedSwitch'
import HomePage from '../screens/Home'
import GlobalStyle from './GlobalStyles'
import { theme } from '../theme/theme'
import ContactModal from '../components/ContactModal/ContactModal'

/**
 * App
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatedSwitch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/contact">
          <div />
        </Route>
        <Route>
          <div>Oops, check your URL, seems this is wrong path;)</div>
        </Route>
      </AnimatedSwitch>
    </ThemeProvider>
  )
}

export default withTheme(App)

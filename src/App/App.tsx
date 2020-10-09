import React from 'react'
import { Route } from 'react-router-dom'
import { withTheme } from 'styled-components'
import { MenuLink } from '../types/MenuLink'
import AnimatedSwitch from '../components/AnimatedSwitch'
import HomePage from '../screens/Home'
import GlobalStyle from './GlobalStyles'

interface Props {}

const menuOptions: MenuLink[] = [
  { to: '/', text: 'About' },
  { to: '/contact', text: 'ContactPage Me' },
]

/**
 * App
 */
function App() {
  return (
    <>
      <GlobalStyle />
      <AnimatedSwitch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/contact" >
          <div />
        </Route>
        <Route>
            <div>Oops, check your URL, seems this is wrong path;)</div>
        </Route>
      </AnimatedSwitch>
    </>
  )
}

export default withTheme(App)

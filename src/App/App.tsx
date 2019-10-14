import React from 'react'
import { Route } from 'react-router-dom'
import { withTheme } from 'styled-components'
import SideNav from '../components/SideNav'
import { MenuLink } from '../types/MenuLink'
import AnimatedSwitch from '../components/AnimatedSwitch'
import Home from '../screens/Home/Home'
import { SideNavContextProvider } from '../components/SideNav/SideNavContext'
import GlobalStyle from './GlobalStyles'

interface Props {}

const menuOptions: MenuLink[] = [
  { to: '/', text: 'About' },
  { to: '/contact', text: 'Contact Me' },
]

/**
 * App
 */
function App(props: Props) {
  return (
    <SideNavContextProvider>
      <GlobalStyle />
      <SideNav menuOptions={menuOptions} />
      <AnimatedSwitch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <div>Nothing Here!</div>
        </Route>
      </AnimatedSwitch>
    </SideNavContextProvider>
  )
}

export default withTheme(App)

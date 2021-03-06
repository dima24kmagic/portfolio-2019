import React from 'react'
import { Route } from 'react-router-dom'
import { withTheme } from 'styled-components'
import SideNav from '../components/SideNav'
import { MenuLink } from '../types/MenuLink'
import AnimatedSwitch from '../components/AnimatedSwitch'
import HomePage from '../screens/Home'
import { SideNavContextProvider } from '../components/SideNav/SideNavContext'
import GlobalStyle from './GlobalStyles'
import ScrollContextProvider from '../components/SmoothScroll/ScrollContext'
import ContactPage from "../screens/Contact";

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
    <SideNavContextProvider>
      <GlobalStyle />
      <SideNav menuOptions={menuOptions} />
      <AnimatedSwitch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/contact" >
          <ContactPage />
        </Route>
        <Route>
          <ScrollContextProvider>
            <div>Oops, check your URL, seems this is wrong path;)</div>
          </ScrollContextProvider>
        </Route>
      </AnimatedSwitch>
    </SideNavContextProvider>
  )
}

export default withTheme(App)

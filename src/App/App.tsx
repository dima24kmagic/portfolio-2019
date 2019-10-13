import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { ThemeProvider, withTheme } from 'styled-components'
import GlobalStyle from './GlobalStyles'
import SideNav from '../components/SideNav'
import { MenuLink } from '../types/MenuLink'
import AnimatedSwitch from '../components/AnimatedSwitch'
import Home from '../screens/Home/Home'
import { useTheme } from '../theme/theme'
import { PlainText, Root } from '../screens/Home/styles'

interface Props {}

const menuOptions: MenuLink[] = [
  { to: '/', text: 'About' },
  { to: '/contact', text: 'Contact Me' },
]

/**
 * App
 */
function App(props: Props) {
  const theme = useTheme()
  const [isNavOpen, setNavOpen] = useState(false)
  const handleNavToggle = () => {
    setNavOpen(!isNavOpen)
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SideNav
          menuOptions={menuOptions}
          isOpen={isNavOpen}
          onToggleNav={handleNavToggle}
        />
        <div>
          <AnimatedSwitch isNavOpen={isNavOpen}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <Root>
                <PlainText>Nothing Here!</PlainText>
              </Root>
            </Route>
          </AnimatedSwitch>
        </div>
      </>
    </ThemeProvider>
  )
}

export default withTheme(App)

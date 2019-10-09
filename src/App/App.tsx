import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './GlobalStyles'
import SideNav from '../components/SideNav'
import { MenuLink } from '../types/MenuLink'
import AnimatedSwitch from '../components/AnimatedSwitch'
import useTheme from '../theme/theme'

interface Props {}

const menuOptions: MenuLink[] = [
  { to: '/', text: 'About' },
  { to: '/contact', text: 'Contact Me' },
]
/**
 * App
 */
function App(props: Props) {
  const [isNavOpen, setNavOpen] = useState(false)
  const handleNavToggle = () => {
    setNavOpen(!isNavOpen)
  }
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <SideNav
          menuOptions={menuOptions}
          isOpen={isNavOpen}
          onToggleNav={handleNavToggle}
        />
        <AnimatedSwitch isNavOpen={isNavOpen}>
          <Route exact path="/">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            aliquam animi beatae debitis doloribus eaque eum fugit harum hic
            libero maiores necessitatibus nemo, neque numquam perferendis
            provident recusandae ut voluptatem!
          </Route>
        </AnimatedSwitch>
      </div>
    </ThemeProvider>
  )
}

export default App

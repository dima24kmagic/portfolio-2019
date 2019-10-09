import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyles'
import SideNav from '../components/SideNav'
import { MenuLink } from '../types/MenuLink'
import AnimatedSwitch from '../components/AnimatedSwitch'

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
  return (
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
  )
}

export default App

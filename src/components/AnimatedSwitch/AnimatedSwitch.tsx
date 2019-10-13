import React from 'react'
import { animated, config, useSpring, useTransition } from 'react-spring'
import { Switch, SwitchProps, useLocation } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import {
  SideNavContextProvider,
  useSideNavContext,
} from '../SideNav/SideNavContext'
import GlobalStyle from '../../App/GlobalStyles'
import { useTheme } from '../../theme/theme'

interface Props extends SwitchProps {
  children: any
}

const Root = styled(animated.div)`
  width: 100%;
  height: auto;
  // use default scroll behaviour on mobiles
  @media (hover: none) and (pointer: coarse) {
    height: 100%;
  }
`

/**
 * Switch that animating routers
 */
function AnimatedSwitch({ children }: Props) {
  const theme = useTheme()
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    delay: 2000,
    initial: {
      opacity: 1,
      transform: 'translate3d(0%,0,0)',
    },
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: config.slow,
  })

  return (
    <>
      {transitions.map(({ item, props, key }) => {
        return (
          <Root key={key} style={props}>
            <Switch location={item}>{children}</Switch>
          </Root>
        )
      })}
    </>
  )
}

export default AnimatedSwitch

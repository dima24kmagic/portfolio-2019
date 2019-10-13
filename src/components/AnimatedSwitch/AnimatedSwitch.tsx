import React from 'react'
import { animated, config, useTransition } from 'react-spring'
import { Switch, SwitchProps, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { useSideNavContext } from '../SideNav/SideNavContext'

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
  const { isOpen: isNavOpen } = useSideNavContext()
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    initial: {
      opacity: 1,
      transform: 'translate3d(0%,0,0)',
      filter: 'blur(0px)',
    },
    from: {
      opacity: 0,
      transform: 'translate3d(25%,0,0)',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      filter: 'blur(0px)',
    },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-25%,0,0)' },
    update: { filter: isNavOpen ? 'blur(3px)' : 'blur(0px)' },
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

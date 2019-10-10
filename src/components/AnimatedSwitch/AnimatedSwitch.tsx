import React from 'react'
import { animated, config, useTransition } from 'react-spring'
import { Switch, SwitchProps, useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface Props extends SwitchProps {
  children: any
  isNavOpen: boolean
}

const Root = styled(animated.div)`
  width: 100%;
  height: 100%;
`

/**
 * Switch that animating routers
 */
function AnimatedSwitch({ children, isNavOpen }: Props) {
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    initial: { opacity: 1, transform: 'translate3d(0%,0,0)' },
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

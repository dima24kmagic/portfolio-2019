import React from 'react'
import { animated, config, useTransition } from 'react-spring'
import { Switch, SwitchProps, useLocation } from 'react-router-dom'
import styled from 'styled-components'

interface Props extends SwitchProps {
  children: any
}

const Root = styled(animated.div)`
  width: 100%;
  height: 100%;
`

/**
 * Switch that animating routers
 */
function AnimatedSwitch({ children }: Props) {
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

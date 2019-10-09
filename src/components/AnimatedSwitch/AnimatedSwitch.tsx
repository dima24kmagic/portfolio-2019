import React, { ReactNode } from 'react'
import { config, useTransition, animated } from 'react-spring'
import { useLocation, Switch, SwitchProps } from 'react-router-dom'

interface Props extends SwitchProps {
  children: any
  isNavOpen: boolean
}

/**
 * Switch that animating routers
 */
function AnimatedSwitch({ children, isNavOpen }: Props) {
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
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
          <animated.div key={key} style={{ ...props }}>
            <Switch location={item}>{children}</Switch>
          </animated.div>
        )
      })}
    </>
  )
}

export default AnimatedSwitch

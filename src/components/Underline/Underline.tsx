import React from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'
import { easeCubicInOut } from 'd3-ease'

interface Props {
  isShow: boolean
  bottom?: string
}

const Root = styled(animated.div)`
  position: absolute;
  bottom: ${({ bottom }) => bottom};
  left: 0;
  height: 2px;
  width: 100%;
  background: ${({ theme }) => theme.color.primary};
`

/**
 * Animated left to right underline
 */
function Underline(props: Props) {
  const { isShow, bottom = '0' } = props
  const transitions = useTransition(isShow, null, {
    from: {
      transform: `translate3d(-100%, 0, 0)`,
    },
    config: {
      duration: 300,
      easing: easeCubicInOut,
    },
    enter: {
      transform: `translate3d(0%, 0, 0)`,
    },
    leave: {
      transform: `translate3d(100%, 0, 0)`,
    },
  })
  return (
    <>
      {transitions.map(({ props, item, key }) => {
        return item && <Root bottom={bottom} style={props} key={key} />
      })}
    </>
  )
}

export default Underline

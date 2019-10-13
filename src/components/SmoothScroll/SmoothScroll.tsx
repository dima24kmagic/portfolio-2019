import React, { ReactNode, useRef } from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'
import useSmoothScroll from './hooks/useSmoothScroll'

interface Props {
  children: ReactNode
}

const Scrollable = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate3d(0px, 0px, 0px);
  overflow: hidden;
  will-change: transform;
  // use default scroll behaviour on mobiles
  @media (hover: none) and (pointer: coarse) {
    overflow-y: auto;
    height: 100%;
  }
`

/**
 * Smooth scroll wrapper
 */
function SmoothScroll(props: Props) {
  const { children } = props
  const scrollWrapperRef = useRef()
  const { handleScroll, scrollProps } = useSmoothScroll(scrollWrapperRef)
  return (
    <Scrollable
      ref={scrollWrapperRef}
      onWheel={handleScroll}
      style={scrollProps}
    >
      {children}
    </Scrollable>
  )
}

export default SmoothScroll

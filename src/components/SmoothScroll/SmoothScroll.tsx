import React, { ReactNode, useRef } from 'react'
import styled, { withTheme } from 'styled-components'
import { animated } from 'react-spring'
import useSmoothScroll from './hooks/useSmoothScroll'
import useScrollBarStyles from './hooks/useScrollBarStyles'

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
const Scroll = styled(animated.div)`
  position: fixed;
  top: 8px;
  right: 5px;
  width: 8px;
  height: ${({ height }) => `${height}px`};
  background: ${({
    theme: {
      color: { primary },
    },
  }) => primary};
  opacity: 0.4;
  border-radius: 8px;
  z-index: 2;
  &:hover {
    opacity: 0.8;
  }
  transition: opacity 0.15s;
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`

/**
 * Smooth scroll wrapper
 */
function SmoothScroll(props: Props) {
  const { children } = props
  const scrollWrapperRef = useRef<HTMLDivElement>(null)
  const { handleMouseWheel, scrollProps, scrollDeltaY } = useSmoothScroll(
    scrollWrapperRef,
  )
  const { scrollHeight, scrollStyles } = useScrollBarStyles(
    scrollDeltaY,
    scrollWrapperRef,
  )
  return (
    <>
      <Scroll height={scrollHeight} style={scrollStyles} />
      <Scrollable
        ref={scrollWrapperRef}
        onWheel={handleMouseWheel}
        style={scrollProps}
      >
        {children}
      </Scrollable>
    </>
  )
}

export default withTheme(SmoothScroll)

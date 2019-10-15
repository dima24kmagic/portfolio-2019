import React, { ReactNode, useRef } from 'react'
import styled, { withTheme } from 'styled-components'
import { animated } from 'react-spring'
import useSmoothScroll from './hooks/useSmoothScroll'
import useScrollBarStyles from './hooks/useScrollBarStyles'
import useScrollDrag from './hooks/useScrollDrag'

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
  top: 0px;
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
    opacity: 0.8 !important;
  }
  transition: opacity 0.3s;
  color ${({ theme: { transitionSpeed } }) => transitionSpeed};
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`

/**
 * Smooth scroll wrapper
 */
function SmoothScroll(props: Props) {
  // TODO: Find a way to optimize this, currently because of much effects usage react- call re-renders (Ref are passed down)
  // TODO: Hide scrollbar after some time
  const { children } = props
  const scrollWrapperRef = useRef<HTMLDivElement>(null)
  const scrollBarRef = useRef<HTMLDivElement>(null)
  const {
    handleMouseWheel,
    scrollProps,
    scrollDeltaY,
    handleScrollDrag,
  } = useSmoothScroll(scrollWrapperRef)
  const { scrollHeight, scrollStyles } = useScrollBarStyles(
    scrollDeltaY,
    scrollWrapperRef,
  )
  const handleMouseDown = useScrollDrag(
    scrollWrapperRef,
    scrollBarRef,
    handleScrollDrag,
  )
  return (
    <>
      <Scroll
        ref={scrollBarRef}
        onMouseDown={handleMouseDown}
        height={scrollHeight}
        style={scrollStyles}
      />
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

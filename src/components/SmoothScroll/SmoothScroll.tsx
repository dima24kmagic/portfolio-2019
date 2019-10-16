import React, { ReactNode, useEffect, useRef } from 'react'
import styled, { ThemeProvider, withTheme } from 'styled-components'
import { animated } from 'react-spring'
import useSmoothScroll from './hooks/useSmoothScroll'
import useScrollDrag from './hooks/useScrollDrag'
import { useTheme } from '../../theme/theme'

interface Props {
  children: ReactNode
  scrollBarRef: any
  handleMouseDown: any
  scrollbarHeight: any
  scrollbarStyles: any
  scrollWrapperRef: any
  handleMouseWheel: any
  scrollProps: any
}

const Scrollable = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate3d(0px, 0px, 0px);
  overflow: ${({ isTest }) => (isTest ? 'auto' : 'hidden')};
  height: ${({ isTest }) => (isTest ? '100%' : 'auto')};
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
  transition: opacity 0.3s,
    background ${({ theme: { transitionSpeed } }) => transitionSpeed};
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
  will-change: transform, opacity;
`

/**
 * Smooth scroll wrapper
 */
function SmoothScroll(props: Props) {
  // TODO: Hide scrollbar after some time
  const {
    children,
    scrollBarRef,
    handleMouseDown,
    scrollbarHeight,
    scrollbarStyles,
    scrollWrapperRef,
    handleMouseWheel,
    scrollProps,
  } = props

  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <Scroll
        ref={scrollBarRef}
        onMouseDown={handleMouseDown}
        height={scrollbarHeight}
        style={scrollbarStyles}
      />
      <Scrollable
        ref={scrollWrapperRef}
        onWheel={handleMouseWheel}
        style={scrollProps}
      >
        {children}
      </Scrollable>
    </ThemeProvider>
  )
}

const ConnectedSmoothScroll = ({ children }: { children: ReactNode }) => {
  const scrollWrapperRef = useRef<HTMLDivElement>(null)
  const scrollBarRef = useRef<HTMLDivElement>(null)
  const {
    handleMouseWheel,
    scrollProps,
    handleScrollbarDrag,
    scrollbarHeight,
    scrollbarStyles,
    handleScrollbarMouseUp,
    handleScrollbarMouseDown
  } = useSmoothScroll(scrollWrapperRef)

  const handleMouseDown = useScrollDrag(
    scrollWrapperRef,
    scrollBarRef,
    handleScrollbarDrag,
    handleScrollbarMouseUp,
    handleScrollbarMouseDown
  )
  return (
    // @ts-ignore
    <SmoothScroll
      scrollWrapperRef={scrollWrapperRef}
      scrollBarRef={scrollBarRef}
      handleMouseWheel={handleMouseWheel}
      scrollProps={scrollProps}
      handleScrollbarDrag={handleScrollbarDrag}
      scrollbarHeight={scrollbarHeight}
      scrollbarStyles={scrollbarStyles}
      handleScrollbarMouseUp={handleScrollbarMouseUp}
      handleMouseDown={handleMouseDown}
    >
      {children}
    </SmoothScroll>
  )
}

export default ConnectedSmoothScroll

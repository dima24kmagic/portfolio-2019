import React, { MutableRefObject, ReactElement } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { animated } from 'react-spring'
import { useTheme } from '../../theme/theme'
import { checkIsMobile } from '../../utils'

interface Props {
  children: ReactElement
  handleMouseDown: any
  scrollbarHeight: number
  scrollbarStyles: any
  scrollBarRef: MutableRefObject<HTMLDivElement>
  scrollWrapperRef: MutableRefObject<HTMLDivElement>
  handleMouseWheel: (e: WheelEvent) => void
  scrollProps: any
}

const Scrollable = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transform: translate3d(0px, 0px, 0px);
  overflow: ${({ isMobile }) => (isMobile ? 'auto' : 'hidden')};
  height: ${({ isMobile }) => (isMobile ? '100%' : 'auto')};
  will-change: transform;
`
const ScrollbarContainer = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 20px;
  z-index: 99;
  &:hover {
    & span {
      width: 10px !important;
      opacity: 0.5 !important;
    }
  }
  display: ${({ isMobile }) => (isMobile ? 'none' : 'auto')};
`

const Scrollbar = styled(animated.span)`
  position: fixed;
  top: 0px;
  right: 5px;
  width: 6px;
  height: ${({ height }) => `${height}px`};
  background: ${({
    theme: {
      color: { primary },
    },
  }) => primary};
  opacity: 0.4;
  border-radius: 8px;
  z-index: 2;
  transition: opacity 0.25s, width 0.25s,
    background ${({ theme: { transitionSpeed } }) => transitionSpeed};
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`

/**
 * Smooth scroll wrapper
 */
function SmoothScroll(props: Props) {
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
  const isMobile = checkIsMobile()
  return (
    <ThemeProvider theme={theme}>
      <ScrollbarContainer isMobile={isMobile} onMouseDown={handleMouseDown}>
        <Scrollbar
          ref={scrollBarRef}
          onMouseDown={handleMouseDown}
          height={scrollbarHeight}
          style={scrollbarStyles}
        />
      </ScrollbarContainer>
      <Scrollable
        isMobile={isMobile}
        ref={scrollWrapperRef}
        onWheel={handleMouseWheel}
        style={scrollProps}
      >
        {children}
      </Scrollable>
    </ThemeProvider>
  )
}

export default SmoothScroll

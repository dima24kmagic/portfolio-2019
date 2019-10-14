import React, { ReactNode, useEffect, useRef, useState } from 'react'
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
  const Scroll = styled(animated.div)`
    position: fixed;
    top: 8px;
    right: 5px;
    width: 8px;
    height: ${({ height }) => `${height}px`};
    background: red;
    opacity: 0.4;
    border-radius: 8px;
    z-index: 2;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    transition: opacity 0.15s;
  `
  const { children } = props
  const scrollWrapperRef = useRef<HTMLDivElement>(null)
  const windowHeight = window.innerHeight
  const { handleScroll, scrollProps } = useSmoothScroll(
    scrollWrapperRef,
    windowHeight,
  )

  const [scrollHeight, setScrollHeight] = useState(200)
  useEffect(() => {
    if (scrollWrapperRef.current) {
      const { current } = scrollWrapperRef
      setScrollHeight(windowHeight * (windowHeight / current.clientHeight))
    }
  }, [scrollWrapperRef])
  return (
    <>
      <Scroll height={40} />
      <Scrollable
        ref={scrollWrapperRef}
        onWheel={handleScroll}
        style={scrollProps}
      >
        {children}
      </Scrollable>
    </>
  )
}

export default SmoothScroll

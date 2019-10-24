import React, {
  MouseEvent,
  MutableRefObject,
  ReactElement,
  useContext,
  useRef,
} from 'react'
import { SpringConfig } from 'react-spring'
import useSmoothScroll from './hooks/useSmoothScroll'
import useScrollDrag from './hooks/useScrollDrag'
import SmoothScroll from './SmoothScroll'

const ScrollContext = React.createContext({
  scroll: (
    position: number = 0,
    config?: SpringConfig,
    scrollEventOffsetDuration: number = 0,
  ) => {},
  scrollWrapperRef: null,
  scrollToRef: (
    ref: MutableRefObject<HTMLDivElement>,
    offset?: number,
    config?: SpringConfig,
    scrollEventOffsetDuration?: number,
  ) => {},
  scrollToEventTarget: (
    event: MouseEvent,
    offset?: number,
    config?: SpringConfig,
    scrollEventOffsetDuration?: number,
  ) => {},
  scrollToRefMobile: (
    ref: MutableRefObject<HTMLElement>,
    offset?: number,
    config?: SpringConfig,
    scrollEventOffsetDuration?: number,
  ) => {},
  scrollToExactPositionMobile: (position: number, config?: SpringConfig) => {},
  scrollToEventTargetMobile: (
    e: MouseEvent<HTMLElement>,
    offset?: number,
    config?: SpringConfig,
    scrollEventOffsetDuration?: number,
  ) => {},
  scrollDeltaY: 0,
})

interface Props {
  children: ReactElement
}

const ScrollContextProvider = ({ children, ...otherProps }: Props) => {
  const scrollWrapperRef = useRef<HTMLDivElement>(null)
  const scrollBarRef = useRef<HTMLDivElement>(null)
  const {
    handleMouseWheel,
    scrollProps,
    handleScrollbarDrag,
    scrollbarHeight,
    scrollbarStyles,
    handleScrollbarMouseUp,
    handleScrollbarMouseDown,
    scrollToExactPosition,
    scrollToRef,
    scrollToEventTarget,
    scrollToRefMobile,
    scrollToExactPositionMobile,
    scrollToEventTargetMobile,
    scrollDeltaY,
  } = useSmoothScroll(scrollWrapperRef)

  const handleMouseDown = useScrollDrag(
    scrollWrapperRef,
    scrollBarRef,
    handleScrollbarDrag,
    handleScrollbarMouseUp,
    handleScrollbarMouseDown,
  )
  return (
    <ScrollContext.Provider
      value={{
        scroll: scrollToExactPosition,
        scrollWrapperRef,
        scrollToRef,
        scrollToEventTarget,
        scrollToRefMobile,
        scrollToExactPositionMobile,
        scrollToEventTargetMobile,
        scrollDeltaY,
      }}
    >
      <SmoothScroll
        scrollBarRef={scrollBarRef}
        handleMouseDown={handleMouseDown}
        scrollbarHeight={scrollbarHeight}
        scrollbarStyles={scrollbarStyles}
        scrollWrapperRef={scrollWrapperRef}
        handleMouseWheel={handleMouseWheel}
        scrollProps={scrollProps}
        {...otherProps}
      >
        {children}
      </SmoothScroll>
    </ScrollContext.Provider>
  )
}

export const useScroll = () => {
  // @ts-ignore
  const { isMobile } = window
  const {
    scroll,
    scrollToRef,
    scrollToEventTarget,
    scrollToEventTargetMobile,
    scrollToExactPositionMobile,
    scrollToRefMobile,
    scrollDeltaY,
  } = useContext(ScrollContext)
  return {
    scrollDeltaY,
    scroll: isMobile ? scrollToExactPositionMobile : scroll,
    scrollToRef: isMobile ? scrollToRefMobile : scrollToRef,
    scrollToEventTarget: isMobile
      ? scrollToEventTargetMobile
      : scrollToEventTarget,
  }
}

export const useScrollWrapperRef = (): MutableRefObject<HTMLDivElement> => {
  const { scrollWrapperRef } = useContext(ScrollContext)
  return scrollWrapperRef
}

export default ScrollContextProvider

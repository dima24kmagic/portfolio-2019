import React, {
  cloneElement,
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
  scroll: (position: number = 0, config: SpringConfig) => {},
  scrollWrapperRef: null,
  scrollToRef: (
    ref: MutableRefObject<HTMLDivElement>,
    offset?: number,
    config?: SpringConfig,
  ) => {},
  scrollToEventTarget: (
    event: MouseEvent,
    offset?: number,
    config?: SpringConfig,
  ) => {},
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
  const { scroll, scrollToRef, scrollToEventTarget } = useContext(ScrollContext)
  return { scroll, scrollToRef, scrollToEventTarget }
}

export const useScrollWrapperRef = (): MutableRefObject<HTMLDivElement> => {
  const { scrollWrapperRef } = useContext(ScrollContext)
  return scrollWrapperRef
}

export default ScrollContextProvider

import React, {
  MouseEvent,
  MutableRefObject,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { SpringConfig } from 'react-spring'
import useSmoothScroll, { windowScrollEvent } from './hooks/useSmoothScroll'
import useScrollDrag from './hooks/useScrollDrag'
import SmoothScroll from './SmoothScroll'
import { checkIsMobile } from '../../utils'

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
  isDefaultScroll: false,
})

interface Props {
  children: ReactElement
  isDefaultScroll?: boolean
}

const ScrollContextProvider = ({
  children,
  isDefaultScroll = false,
  ...otherProps
}: Props) => {
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
        isDefaultScroll,
      }}
    >
      <SmoothScroll
        isDefaultScroll={isDefaultScroll}
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
    isDefaultScroll,
  } = useContext(ScrollContext)
  return {
    scrollDeltaY,
    scroll: isMobile ? scrollToExactPositionMobile : scroll,
    scrollToRef: isMobile ? scrollToRefMobile : scrollToRef,
    scrollToEventTarget: isMobile
      ? scrollToEventTargetMobile
      : scrollToEventTarget,
    isDefaultScroll,
  }
}

export const useScrollWrapperRef = (): MutableRefObject<HTMLDivElement> => {
  const { scrollWrapperRef } = useContext(ScrollContext)
  return scrollWrapperRef
}

export const useScrollDeltaY = (callback: (scrollValue: number) => void) => {
  const { isDefaultScroll } = useContext(ScrollContext)
  const wrapperRef = useScrollWrapperRef()

  const cb = () => {
    // @ts-ignore
    callback(window.scrollDeltaY)
  }
  const mobileCb = () => {
    callback(wrapperRef.current.scrollTop * -1)
  }

  useEffect(() => {
    if (checkIsMobile() || isDefaultScroll) {
      wrapperRef.current.addEventListener('scroll', mobileCb)
      return () => wrapperRef.current.removeEventListener('scroll', mobileCb)
    }
    window.addEventListener(windowScrollEvent.type, cb)
    return () => window.removeEventListener(windowScrollEvent.type, cb)
  }, [])
}

export const useIsRefInScrollView = (
  ref: MutableRefObject<HTMLElement>,
  callback: (isInScroll: boolean) => void,
  offsetValue: number = 0,
) => {
  const checkIsElementInView = scrollVal => {
    const topValue = ref.current.offsetTop
    const shownInView = topValue - (topValue - scrollVal)
    if (shownInView > offsetValue) {
      callback(true)
    } else {
      callback(false)
    }
  }
  useScrollDeltaY(checkIsElementInView)
}

export const useIsRefInView = (
  ref: MutableRefObject<HTMLElement>,
  offsetValue: number = 0,
) => {
  const [isInView, setInView] = useState(false)
  const handleIsInView = isInView => setInView(isInView)
  const checkIsElementInView = scrollVal => {
    const topValue = ref.current.offsetTop
    const shownInView = (topValue - window.innerHeight + scrollVal) * -1
    if (shownInView > offsetValue) {
      handleIsInView(true)
    } else {
      handleIsInView(false)
    }
  }
  useScrollDeltaY(checkIsElementInView)
  return isInView
}

export default ScrollContextProvider

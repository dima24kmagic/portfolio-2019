import { MouseEvent, MutableRefObject, useEffect } from 'react'
import { SpringConfig, useSpring } from 'react-spring'
import { easeCubicOut } from 'd3-ease'

const SCROLLBAR_OFFSET = 16

export const windowScrollEvent = new CustomEvent('scrollDeltaY')

const useSmoothScroll = (
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
) => {
  /* ********* CALCULATED VARIABLES *********** */
  let wrapperHeight = 1
  let windowToContentRatio = 1
  let scrollDeltaYHolded = 1

  /* ********* STYLES VARIABLES *********** */
  let scrollDeltaY = 0
  let scrollbarHeight = 0
  let scrollbarMovePercentage =
    (scrollDeltaY / wrapperHeight) * window.innerHeight - SCROLLBAR_OFFSET

  /* ********* SPRINGS STYLES *********** */
  const [scrollProps, setScrollStyles] = useSpring(() => {
    return {
      transform: `translate3d(0px, 0px, 0px)`,
      scrollY: 0,
      onFrame: null,
      config: {},
    }
  })
  const [scrollbarStyles, setScrollbarStyles] = useSpring(() => ({
    to: {
      transform: `translate3d(0px, ${scrollbarMovePercentage * -1}px, 0px)`,
      height: 0,
      opacity: 0.4,
    },
    onRest: () => {
      setScrollbarStyles({
        // @ts-ignore
        to: {
          opacity: 0,
        },
        delay: 1500,
        config: {},
      })
    },
  }))

  /* ********* SET STYLES FOR EXACT VALUE *********** */
  const handleScroll = (
    valueToScroll: number,
    scrollWrapperConfig: SpringConfig = {},
    scrollbarConfig: SpringConfig = null,
  ) => {
    scrollDeltaY = valueToScroll

    // if scroll down
    if (valueToScroll <= 0 && wrapperHeight > window.innerHeight) {
      // When about to scroll to the very bottom
      if (Math.abs(valueToScroll) > wrapperHeight - window.innerHeight) {
        scrollDeltaY = (wrapperHeight - window.innerHeight) * -1
      }
      //  when wanna scroll more than bottom
    } else {
      scrollDeltaY = 0
    }
    // SET NEW VALUES FOR STYLES
    // scrollDeltaY = newScrollValue
    scrollbarMovePercentage =
      (scrollDeltaY / wrapperHeight) * window.innerHeight - SCROLLBAR_OFFSET

    setScrollbarStyles({
      to: {
        transform: `translate3d(0px, ${scrollbarMovePercentage * -1}px, 0px)`,
        height: scrollbarHeight,
        opacity: 0.4,
      },
      config:
        scrollbarConfig ||
        (key => {
          if (key === 'opacity') {
            return {
              duration: 10,
              easing: easeCubicOut,
            }
          }
          return {}
        }),
    })
    setScrollStyles({
      transform: `translate3d(0px, ${scrollDeltaY}px, 0px)`,
      scrollY: scrollDeltaY,
      config: scrollWrapperConfig,
      onFrame: null,
    })

    // @ts-ignore
    window.scrollDeltaY = scrollDeltaY
    window.dispatchEvent(windowScrollEvent)
  }

  /* ********* ON WRAPPER MOUNTED *********** */
  const setInitialWrapperAndScrollbarHeight = () => {
    if (scrollWrapperRef.current) {
      wrapperHeight = scrollWrapperRef.current.clientHeight
      if (wrapperHeight > window.innerHeight) {
        windowToContentRatio =
          window.innerHeight / scrollWrapperRef.current.clientHeight
        scrollbarHeight =
          window.innerHeight * windowToContentRatio - SCROLLBAR_OFFSET * 2
        if (scrollDeltaY < (wrapperHeight - window.innerHeight) * -1) {
          const newScrollValue = (wrapperHeight - window.innerHeight) * -1
          handleScroll(newScrollValue, { duration: 0 })
        }
        setScrollbarStyles({
          to: {
            transform: `translate3d(0px, ${scrollbarMovePercentage *
              -1}px, 0px)`,
            height: scrollbarHeight,
            opacity: 0.4,
          },
          config: key => {
            if (key === 'height') {
              return {
                duration: 0,
              }
            }
            return {}
          },
        })
      }
    }
  }
  useEffect(() => {
    setInitialWrapperAndScrollbarHeight()
  }, [scrollWrapperRef])

  /* ********* WINDOW RESIZE *********** */
  const handleWindowResize = () => {
    wrapperHeight = scrollWrapperRef.current.clientHeight
    if (wrapperHeight > window.innerHeight) {
      setInitialWrapperAndScrollbarHeight()
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  /* ********* EVENT HANDLES *********** */
  const handleMouseWheel = (e: WheelEvent) => {
    // const deltaYDirection = e.deltaY > 0 ? 1 : -1
    const valueToScroll = scrollDeltaY - e.deltaY
    handleScroll(valueToScroll)
  }

  const handleScrollbarDrag = deltaY => {
    const valueToScroll = scrollDeltaYHolded + deltaY
    handleScroll(valueToScroll)
  }
  const handleScrollbarMouseUp = () => {
    scrollDeltaYHolded = scrollDeltaY
  }
  const handleScrollbarMouseDown = () => {
    scrollDeltaYHolded = scrollDeltaY
  }

  /* ********* API *********** */
  const scrollToExactPosition = (
    position: number = 0,
    config: SpringConfig = {},
    scrollEventOffsetDuration: number = 0,
  ) => {
    if (wrapperHeight === 1) {
      if (scrollWrapperRef.current) {
        wrapperHeight = scrollWrapperRef.current.clientHeight
      }
    }
    let valueToScroll = position * -1
    // if scroll down
    if (valueToScroll <= 0 && wrapperHeight > window.innerHeight) {
      // When about to scroll to the very bottom
      if (Math.abs(valueToScroll) > wrapperHeight - window.innerHeight) {
        valueToScroll = (wrapperHeight - window.innerHeight) * -1
      }
      //  when wanna scroll more than bottom
    } else {
      valueToScroll = 0
    }
    // SET NEW VALUES FOR STYLES
    // scrollDeltaY = newScrollValue
    scrollbarMovePercentage =
      (valueToScroll / wrapperHeight) * window.innerHeight - SCROLLBAR_OFFSET

    setScrollbarStyles({
      to: {
        transform: `translate3d(0px, ${scrollbarMovePercentage * -1}px, 0px)`,
        height: scrollbarHeight,
        opacity: 0.4,
      },
      config: key => {
        if (key === 'opacity') {
          return {
            duration: 10,
            easing: easeCubicOut,
          }
        }
        if (key === 'transform') return config
        return {}
      },
    })
    setScrollStyles({
      from: {
        scrollY: scrollDeltaY,
      },
      transform: `translate3d(0px, ${valueToScroll}px, 0px)`,
      scrollY: valueToScroll,
      config,
      onFrame: ({ scrollY }) => {},
    })
    scrollDeltaY = valueToScroll
    scrollDeltaYHolded = scrollDeltaY
    // @ts-ignore
    window.scrollDeltaY = scrollDeltaY
    if (config.duration) {
      setTimeout(() => {
        window.dispatchEvent(windowScrollEvent)
      }, config.duration - scrollEventOffsetDuration)
    } else {
      window.dispatchEvent(windowScrollEvent)
    }
  }

  const scrollToRef = (
    ref: MutableRefObject<HTMLElement>,
    offset: number = 0,
    config: SpringConfig = {},
    scrollEventOffsetDuration: number = 0,
  ) => {
    if (ref.current) {
      const offsetFromTop =
        ref.current.getBoundingClientRect().top + offset - scrollDeltaY
      scrollToExactPosition(offsetFromTop, config, scrollEventOffsetDuration)
    }
  }
  const scrollToEventTarget = (
    event: MouseEvent,
    offset: number = 0,
    config: SpringConfig = {},
    scrollEventOffsetDuration: number = 0,
  ) => {
    if (event.currentTarget) {
      const offsetFromTop =
        event.currentTarget.getBoundingClientRect().top + offset - scrollDeltaY
      scrollToExactPosition(offsetFromTop, config, scrollEventOffsetDuration)
    }
  }
  const scrollToExactPositionMobile = (
    position: number = 0,
    config: SpringConfig = {},
    scrollEventOffsetDuration: number = 0,
  ) => {
    if (scrollWrapperRef.current) {
      setScrollStyles({
        reset: true,
        scrollY: position,
        from: { scrollY: scrollWrapperRef.current.scrollTop },
        onFrame: ({ scrollY }) => {
          scrollWrapperRef.current.scroll({ top: scrollY, behavior: 'auto' })
        },
        config,
      })

      if (config.duration) {
        setTimeout(() => {
          // @ts-ignore
          window.scrollDeltaY = position * -1
          window.dispatchEvent(windowScrollEvent)
        }, config.duration - scrollEventOffsetDuration)
      } else {
        // @ts-ignore
        window.scrollDeltaY = position * -1
        window.dispatchEvent(windowScrollEvent)
      }
    }
  }

  const scrollToRefMobile = (
    ref: MutableRefObject<HTMLElement>,
    offset: number = 0,
    config: SpringConfig = {},
    scrollEventOffsetDuration: number = 0,
  ) => {
    if (ref.current) {
      const offsetFromTop =
        ref.current.getBoundingClientRect().top +
        offset +
        scrollWrapperRef.current.scrollTop
      scrollToExactPositionMobile(
        offsetFromTop,
        config,
        scrollEventOffsetDuration,
      )
    }
  }
  const scrollToEventTargetMobile = (
    event: MouseEvent,
    offset: number = 0,
    config: SpringConfig = {},
    scrollEventOffsetDuration: number = 0,
  ) => {
    if (event.currentTarget) {
      const offsetFromTop =
        event.currentTarget.getBoundingClientRect().top +
        offset +
        scrollWrapperRef.current.scrollTop
      scrollToExactPositionMobile(
        offsetFromTop,
        config,
        scrollEventOffsetDuration,
      )
    }
  }

  return {
    handleMouseWheel,
    scrollProps,
    handleScrollbarDrag,
    handleScrollbarMouseUp,
    handleScrollbarMouseDown,
    scrollbarStyles,
    scrollbarHeight,
    scrollToExactPosition,
    scrollToRef,
    scrollToEventTarget,
    scrollToEventTargetMobile,
    scrollToExactPositionMobile,
    scrollToRefMobile,
    scrollDeltaY,
  }
}

export default useSmoothScroll

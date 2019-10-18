import { SpringConfig, useSpring } from 'react-spring'
import { MutableRefObject, useEffect } from 'react'
import { easeCubicOut } from 'd3-ease'

const SCROLLBAR_OFFSET = 16

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
  const [scrollProps, setScrollProps] = useSpring(() => {
    return {
      to: {
        transform: `translate3d(0px, 0px, 0px)`,
      },
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

  /* ********* ON WRAPPER MOUNTED *********** */
  useEffect(() => {
    if (scrollWrapperRef.current) {
      wrapperHeight = scrollWrapperRef.current.clientHeight
      if (wrapperHeight > window.innerHeight) {
        windowToContentRatio =
          window.innerHeight / scrollWrapperRef.current.clientHeight
        scrollbarHeight =
          window.innerHeight * windowToContentRatio - SCROLLBAR_OFFSET * 2
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
  }, [scrollWrapperRef])

  /* ********* WINDOW RESIZE *********** */
  const handleWindowResize = () => {
    wrapperHeight = scrollWrapperRef.current.clientHeight
    if (wrapperHeight > window.innerHeight) {
      scrollbarHeight =
        window.innerHeight *
          (window.innerHeight / scrollWrapperRef.current.clientHeight) -
        SCROLLBAR_OFFSET * 2
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  /* ********* SET STYLES ON WHEEL SCROLL *********** */
  const handleScroll = (valueToScroll: number) => {
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
      config: key => {
        if (key === 'opacity') {
          return {
            duration: 10,
            easing: easeCubicOut,
          }
        }
        return {}
      },
    })
    setScrollProps({
      to: {
        transform: `translate3d(0px, ${scrollDeltaY}px, 0px)`,
      },
      config: {},
    })
  }

  /* ********* EVENT HANDLES *********** */
  const handleMouseWheel = (e: WheelEvent) => {
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
    config: SpringConfig,
  ) => {
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
    setScrollProps({
      to: {
        transform: `translate3d(0px, ${valueToScroll}px, 0px)`,
      },
      config,
    })
    scrollDeltaY = valueToScroll
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
  }
}

export default useSmoothScroll

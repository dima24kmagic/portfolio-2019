import { useSpring } from 'react-spring'
import { MutableRefObject, useEffect } from 'react'

const SCROLLBAR_OFFSET = 16

const useSmoothScroll = (
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
) => {
  /* ********* CALCULATED VARIABLES *********** */
  let wrapperHeight = 1
  let windowToContentRatio = 1
  let scrollDeltaYHolded = 0

  /* ********* STYLES VARIABLES *********** */
  console.log('HERE!')
  let scrollDeltaY = 0
  let scrollbarHeight = 0
  let scrollbarMovePercentage =
    (scrollDeltaY / wrapperHeight) * window.innerHeight - SCROLLBAR_OFFSET

  /* ********* SPRINGS STYLES *********** */
  const [scrollProps, setScrollProps] = useSpring(() => {
    return {
      transform: `translate3d(0px, 0px, 0px)`,
    }
  })
  const [scrollbarStyles, setScrollbarStyles] = useSpring(() => ({
    transform: `translate3d(0px, ${scrollbarMovePercentage * -1}px, 0px)`,
    height: 0,
  }))

  setScrollbarStyles({
    transform: `translate3d(0px, ${scrollbarMovePercentage * -1}px, 0px)`,
    height: scrollbarHeight,
  })

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
          transform: `translate3d(0px, ${scrollbarMovePercentage * -1}px, 0px)`,
          height: scrollbarHeight,
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
      transform: `translate3d(0px, ${scrollbarMovePercentage * -1}px, 0px)`,
      // @ts-ignore
      height: scrollbarHeight,
    })
    setScrollProps({
      transform: `translate3d(0px, ${scrollDeltaY}px, 0px)`,
    })
  }

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

  return {
    handleMouseWheel,
    scrollProps,
    handleScrollbarDrag,
    handleScrollbarMouseUp,
    scrollbarStyles,
    scrollbarHeight,
  }
}

export default useSmoothScroll

import { useSpring } from 'react-spring'
import { MutableRefObject, useEffect } from 'react'

const useSmoothScroll = (
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
) => {
  let scrollDeltaY = 0
  let wrapperHeight = 0
  if (scrollWrapperRef.current) {
    wrapperHeight = scrollWrapperRef.current.clientHeight
  }
  const [scrollProps, setScrollProps] = useSpring(() => {
    return {
      transform: `translate3d(0px, 0px, 0px)`,
    }
  })

  // Add on screen resize adjustments
  const handleWindowResize = () => {
    wrapperHeight = scrollWrapperRef.current.clientHeight
  }
  useEffect(() => {
    if (scrollWrapperRef.current) {
      wrapperHeight = scrollWrapperRef.current.clientHeight
    }
  }, [scrollWrapperRef])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const handleScroll = (valueToScroll: number) => {
    let newScrollValue = valueToScroll
    // if scroll down
    if (newScrollValue <= 0 && wrapperHeight > window.innerHeight) {
      // When about to scroll to the very bottom
      if (Math.abs(newScrollValue) > wrapperHeight - window.innerHeight) {
        newScrollValue = (wrapperHeight - window.innerHeight) * -1
      }
      //  when wanna scroll more than bottom
    } else {
      newScrollValue = 0
    }
    scrollDeltaY = newScrollValue
    setScrollProps({
      transform: `translate3d(0px, ${newScrollValue}px, 0px)`,
    })
  }

  const handleMouseWheel = (e: WheelEvent) => {
    const valueToScroll = scrollDeltaY - e.deltaY
    handleScroll(valueToScroll)
  }

  const handleScrollDrag = deltaY => {
    const valueToScroll = scrollDeltaY + deltaY
    handleScroll(valueToScroll)
  }
  return {
    handleMouseWheel,
    scrollProps,
    scrollDeltaY,
    handleScrollDrag,
  }
}

export default useSmoothScroll

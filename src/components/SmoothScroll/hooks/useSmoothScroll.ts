import { useSpring } from 'react-spring'
import { MutableRefObject, useEffect, useState } from 'react'

const useSmoothScroll = (
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
) => {
  const [scrollDeltaY, setScrollDeltaY] = useState(0)
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const [scrollProps, setScrollProps] = useSpring(() => {
    return {
      transform: `translate3d(0px, 0px, 0px)`,
    }
  })

  // Add on screen resize adjustments
  const handleWindowResize = () => {
    setWrapperHeight(scrollWrapperRef.current.clientHeight)
  }
  useEffect(() => {
    if (scrollWrapperRef.current) {
      setWrapperHeight(scrollWrapperRef.current.clientHeight)
    }
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [scrollWrapperRef])

  const handleMouseWheel = (e: WheelEvent) => {
    let newScrollValue = scrollDeltaY - e.deltaY
    // if scroll down
    if (newScrollValue <= 0) {
      // When about to scroll to the very bottom
      if (Math.abs(newScrollValue) > wrapperHeight - window.innerHeight) {
        newScrollValue = (wrapperHeight - window.innerHeight) * -1
      }
      //  when wanna scroll more than bottom
    } else {
      newScrollValue = 0
    }
    setScrollDeltaY(newScrollValue)
    setScrollProps({
      transform: `translate3d(0px, ${newScrollValue}px, 0px)`,
    })
  }
  return {
    handleMouseWheel,
    scrollProps,
    scrollDeltaY,
  }
}

export default useSmoothScroll

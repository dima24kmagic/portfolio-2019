import { useSpring } from 'react-spring'
import { MutableRefObject, useEffect, useState } from 'react'

const useSmoothScroll = (
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
  windowHeight: number,
) => {
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const [scrollProps, setScrollProps] = useSpring(() => {
    return {
      transform: `translate3d(0px, 0px, 0px)`,
    }
  })

  let scrollDeltaY = 0

  useEffect(() => {
    if (scrollWrapperRef.current) {
      setWrapperHeight(scrollWrapperRef.current.clientHeight)
    }
  }, [scrollWrapperRef])

  const handleScroll = (e: WheelEvent) => {
    const newScrollValue = scrollDeltaY - e.deltaY
    // if scroll down
    if (newScrollValue <= 0) {
      // When about to scroll to the very bottom
      if (Math.abs(newScrollValue) > wrapperHeight - windowHeight) {
        scrollDeltaY = (wrapperHeight - windowHeight) * -1
        //  Usual scroll
      } else {
        scrollDeltaY = newScrollValue
      }
    } else {
      scrollDeltaY = 0
    }
    setScrollProps({
      transform: `translate3d(0px, ${scrollDeltaY}px, 0px)`,
    })
  }
  return {
    handleScroll,
    scrollProps,
  }
}

export default useSmoothScroll

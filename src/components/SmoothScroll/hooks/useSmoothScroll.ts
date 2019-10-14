import { useSpring } from 'react-spring'
import { MutableRefObject, useEffect, useState } from 'react'
import { createVerify } from 'crypto'

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
  }, [scrollWrapperRef])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const handleScroll = (valueToScroll: number) => {
    let newScrollValue = valueToScroll
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

  const handleMouseWheel = (e: WheelEvent) => {
    const valueToScroll = scrollDeltaY - e.deltaY
    handleScroll(valueToScroll)
  }

  const handleOnScrollDrag = deltaY => {
    const valueToScroll = scrollDeltaY + deltaY
    handleScroll(valueToScroll)
  }
  return {
    handleMouseWheel,
    scrollProps,
    scrollDeltaY,
    handleOnScrollDrag,
  }
}

export default useSmoothScroll

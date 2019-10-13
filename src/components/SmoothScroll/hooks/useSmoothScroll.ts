import { useSpring } from 'react-spring'
import { MutableRefObject, useEffect } from 'react'

const useSmoothScroll = (
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
) => {
  let scrollDeltaY = 0

  const windowHeight = window.innerHeight
  console.log(window.innerHeight, window.outerHeight)

  let wrapperHeight = 0
  useEffect(() => {
    if (scrollWrapperRef.current) {
      wrapperHeight = scrollWrapperRef.current.clientHeight
    }
  }, [scrollWrapperRef])

  const [scrollProps, setScrollProps] = useSpring(() => {
    return {
      transform: `translate3d(0px, ${scrollDeltaY}px, 0px)`,
    }
  })
  const handleScroll = (e: WheelEvent) => {
    const newScrollValue = scrollDeltaY - e.deltaY
    if (newScrollValue <= 0) {
      console.log({ wrapperHeight })
      if (Math.abs(newScrollValue) > wrapperHeight - windowHeight) {
        scrollDeltaY = (wrapperHeight - windowHeight) * -1
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

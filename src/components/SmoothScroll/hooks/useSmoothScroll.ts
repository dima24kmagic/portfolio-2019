import { useSpring } from 'react-spring'
import { MutableRefObject, useEffect } from 'react'

const useSmoothScroll = (
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
) => {
  let scrollDeltaY = 0
  const [scrollProps, setScrollProps] = useSpring(() => {
    return {
      transform: `translate3d(0px, ${scrollDeltaY}px, 0px)`,
    }
  })
  const windowHeight = window.innerHeight

  let wrapperHeight = 0
  useEffect(() => {
    const handleResize = () => {
      if (scrollWrapperRef.current) {
        wrapperHeight = scrollWrapperRef.current.clientHeight
        scrollDeltaY = (wrapperHeight - windowHeight) * -1
        setScrollProps({
          transform: `translate3d(0px, ${scrollDeltaY}px, 0px)`,
        })
      }
    }
    window.addEventListener('resize', handleResize)
    if (scrollWrapperRef.current) {
      wrapperHeight = scrollWrapperRef.current.clientHeight
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [scrollWrapperRef])

  const handleScroll = (e: WheelEvent) => {
    const newScrollValue = scrollDeltaY - e.deltaY
    if (newScrollValue <= 0) {
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

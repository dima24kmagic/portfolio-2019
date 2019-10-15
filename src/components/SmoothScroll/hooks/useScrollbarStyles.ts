import { MutableRefObject, useEffect, useState } from 'react'
import { useSpring } from 'react-spring'

const SCROLL_OFFSET = 16

const useScrollbarStyles = (
  currentScrollDeltaY: number,
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
) => {
  let wrapperHeight = 1
  if (scrollWrapperRef.current) {
    wrapperHeight = scrollWrapperRef.current.clientHeight
  }

  const [scrollbarHeight, setScrollHeight] = useState(0)
  useEffect(() => {
    if (scrollWrapperRef.current) {
      wrapperHeight = scrollWrapperRef.current.clientHeight
      if (wrapperHeight > window.innerHeight) {
        setScrollHeight(
          window.innerHeight *
            (window.innerHeight / scrollWrapperRef.current.clientHeight) -
            SCROLL_OFFSET * 2,
        )
      }
    }
  }, [scrollWrapperRef])

  // On window resize
  const handleWindowResize = () => {
    wrapperHeight = scrollWrapperRef.current.clientHeight
    if (wrapperHeight > window.innerHeight) {
      setScrollHeight(
        window.innerHeight *
          (window.innerHeight / scrollWrapperRef.current.clientHeight) -
          SCROLL_OFFSET * 2,
      )
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const movePercentage =
    (currentScrollDeltaY / wrapperHeight) * window.innerHeight - SCROLL_OFFSET
  const [scrollbarStyles, setScrollStyles] = useSpring(() => ({
    transform: `translate3d(0px, ${movePercentage * -1}px, 0px)`,
    // opacity: 0.4,
  }))

  // move scroll when content is moved
  useEffect(() => {
    setScrollStyles({
      transform: `translate3d(0px, ${movePercentage * -1}px, 0px)`,
    })
  }, [currentScrollDeltaY])

  return {
    scrollbarStyles,
    scrollbarHeight,
  }
}

export default useScrollbarStyles

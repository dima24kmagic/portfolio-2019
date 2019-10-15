import { MutableRefObject, useEffect, useState } from 'react'
import { useSpring } from 'react-spring'

const SCROLL_OFFSET = 16

const useScrollBarStyles = (
  currentScrollDeltaY: number,
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
) => {
  let wrapperHeight = 1
  if (scrollWrapperRef.current) {
    wrapperHeight = scrollWrapperRef.current.clientHeight
  }

  const [scrollHeight, setScrollHeight] = useState(0)
  useEffect(() => {
    if (scrollWrapperRef.current) {
      wrapperHeight = scrollWrapperRef.current.clientHeight
      setScrollHeight(
        window.innerHeight *
          (window.innerHeight / scrollWrapperRef.current.clientHeight) -
          SCROLL_OFFSET * 2,
      )
    }
  }, [scrollWrapperRef])

  // On window resize
  const handleWindowResize = () => {
    wrapperHeight = scrollWrapperRef.current.clientHeight
    setScrollHeight(
      window.innerHeight *
        (window.innerHeight / scrollWrapperRef.current.clientHeight) -
        SCROLL_OFFSET * 2,
    )
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const movePercentage =
    (currentScrollDeltaY / wrapperHeight) * window.innerHeight - SCROLL_OFFSET
  const [scrollStyles, setScrollStyles] = useSpring(() => ({
    transform: `translate3d(0px, ${movePercentage * -1}px, 0px)`,
    opacity: 0.4,
  }))

  // move scroll when content is moved
  useEffect(() => {
    setScrollStyles({
      transform: `translate3d(0px, ${movePercentage * -1}px, 0px)`,
    })
  }, [currentScrollDeltaY])

  const handleScrollMouseDown = () => {
    setScrollStyles({
      opacity: 0.8,
    })
  }
  const handleScrollMouseUp = () => {
    setScrollStyles({
      opacity: 0.4,
    })
  }
  return {
    scrollStyles,
    scrollHeight,
    handleScrollMouseDown,
    handleScrollMouseUp,
  }
}

export default useScrollBarStyles

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

  // 100%
  const scrollPercentage = wrapperHeight
  // Percents to move by depends on window
  const movePercentage =
    (currentScrollDeltaY / scrollPercentage) * window.innerHeight -
    SCROLL_OFFSET

  console.log({ movePercentage, scrollPercentage })

  const [scrollStyles, setScrollStyles] = useSpring(() => ({
    transform: `translate3d(0px, ${movePercentage * -1}px, 0px)`,
  }))
  useEffect(() => {
    setScrollStyles({
      transform: `translate3d(0px, ${movePercentage * -1}px, 0px)`,
    })
  }, [currentScrollDeltaY])
  return { scrollStyles, scrollHeight }
}

export default useScrollBarStyles

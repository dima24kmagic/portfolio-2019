import { MutableRefObject, useEffect, useState } from 'react'
import { useSpring } from 'react-spring'

const SCROLLO_FFSET = 16

const useScrollBarStyles = (
  currentScrollDeltaY: number,
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
) => {
  const [scrollHeight, setScrollHeight] = useState(0)
  useEffect(() => {
    if (scrollWrapperRef.current) {
      setScrollHeight(
        window.innerHeight *
          (window.innerHeight / scrollWrapperRef.current.clientHeight) -
          SCROLLO_FFSET * 2,
      )
    }
  }, [scrollWrapperRef])

  const handleWindowResize = () => {
    setScrollHeight(
      window.innerHeight *
        (window.innerHeight / scrollWrapperRef.current.clientHeight) -
        SCROLLO_FFSET * 2,
    )
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  // 100%
  const scrollPercentage = Math.abs(currentScrollDeltaY) + window.innerHeight
  // Percents to move by depends on window
  const movePercentage =
    (currentScrollDeltaY / scrollPercentage) * window.innerHeight -
    SCROLLO_FFSET

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

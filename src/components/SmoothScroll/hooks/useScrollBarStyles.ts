import { MutableRefObject, useEffect, useState } from 'react'
import { useSpring } from 'react-spring'

const useScrollBarStyles = (
  currentScrollDeltaY: number,
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
) => {
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    if (scrollWrapperRef.current) {
      const { current } = scrollWrapperRef
      setScrollHeight(
        window.innerHeight * (window.innerHeight / current.clientHeight) - 90,
      )
    }
  }, [scrollWrapperRef])

  const [scrollStyles, setScrollStyles] = useSpring(() => ({
    transform: `translate3d(0px, ${currentScrollDeltaY * -1}px, 0px)`,
  }))
  useEffect(() => {
    setScrollStyles({
      transform: `translate3d(0px, ${currentScrollDeltaY * -1}px, 0px)`,
    })
  }, [currentScrollDeltaY])
  return { scrollStyles, scrollHeight }
}

export default useScrollBarStyles

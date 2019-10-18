import React, { useEffect, useRef } from 'react'
import { useSpring } from 'react-spring'
import { easeExpOut } from 'd3-ease'
import {
  NavigateMoreButton,
  PreviewContent,
  PreviewImage,
} from '../PreviewContent'
import AnimatedName from '../../AnimatedName'
import mePortraitImg from '../../../images/Me Portrait.jpg'
import {
  useScroll,
  useScrollWrapperRef,
} from '../../SmoothScroll/ScrollContext'

/**
 * Home preview content (img + text)
 */
function HomePreview() {
  const showMoreButtonStyled = useSpring({
    delay: 1600,
    from: {
      opacity: 0,
      transform: 'translate3d(-80%, 0px, 0px)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(-50%, 0px, 0px)',
    },
    config: {
      duration: 1900,
      easing: easeExpOut,
    },
  })

  const { scroll, scrollToRef, scrollToEventTarget } = useScroll()
  const scrollWrapperRef = useScrollWrapperRef()
  const testRef = useRef<HTMLDivElement>()
  const handleScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    scrollToEventTarget(e)
  }

  useEffect(() => {
    console.log('RUN!', testRef, scrollWrapperRef)
    if (testRef.current && scrollWrapperRef.current) {
      scrollToRef(testRef)
    }
  }, [scrollWrapperRef, testRef])
  return (
    <PreviewContent>
      <PreviewImage src={mePortraitImg} />
      <AnimatedName />
      <NavigateMoreButton
        ref={testRef}
        onClick={handleScroll}
        style={showMoreButtonStyled}
      >
        Read More
      </NavigateMoreButton>
    </PreviewContent>
  )
}

export default HomePreview

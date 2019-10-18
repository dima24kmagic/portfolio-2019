import React from 'react'
import { useSpring } from 'react-spring'
import { easeExpOut } from 'd3-ease'
import {
  NavigateMoreButton,
  PreviewContent,
  PreviewImage,
} from '../PreviewContent'
import AnimatedName from '../../AnimatedName'
import mePortraitImg from '../../../images/Me Portrait.jpg'
import { useScroll } from '../../SmoothScroll/ScrollContext'

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

  const { scroll } = useScroll()
  const handleScroll = () => {
    scroll(600)
  }
  return (
    <PreviewContent>
      <PreviewImage src={mePortraitImg} />
      <AnimatedName />
      <NavigateMoreButton onClick={handleScroll} style={showMoreButtonStyled}>
        Read More
      </NavigateMoreButton>
    </PreviewContent>
  )
}

export default HomePreview

import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import { easeExpOut } from 'd3-ease'
import {
  NavigateMoreButton,
  PreviewContent,
  PreviewImage,
} from '../PreviewContent'
import AnimatedName from '../../AnimatedName'
import mePortraitImg from '../../../images/Me Portrait.jpg'
import meLandscapeImg from '../../../images/Me Landscape.jpg'

interface Props {}

/**
 * Home preview content (img + text)
 */
function HomePreview(props: Props) {
  const {} = props
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
  return (
    <PreviewContent>
      <PreviewImage src={meLandscapeImg} />
      <AnimatedName />
      <NavigateMoreButton style={showMoreButtonStyled}>
        Read More
      </NavigateMoreButton>
    </PreviewContent>
  )
}

export default HomePreview

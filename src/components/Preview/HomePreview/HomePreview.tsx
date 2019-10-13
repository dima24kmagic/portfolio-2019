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
  const [isImgLoaded, setImgLoaded] = useState(false)
  const handleImgLoaded = () => {
    console.log('LOADED')
    setImgLoaded(true)
  }
  const showMoreButtonStyled = useSpring({
    delay: 1600,
    from: {
      opacity: 0,
      transform: 'translateX(-80%)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(-50%)',
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

import React, { MouseEvent } from 'react'
import { useSpring } from 'react-spring'
import { easeExpOut } from 'd3-ease'
import {
  NavigateMoreButton,
  PreviewContent,
  PreviewImage,
} from '../PreviewContent'
import AnimatedName from '../../AnimatedName'
import mePortraitImg from '../../../images/Me Portrait.jpg'

interface Props {
  onReadMore?: (e: MouseEvent<HTMLDivElement>) => void
}

/**
 * HomePage preview content (img + text)
 */
function HomePreview(props: Props) {
  const { onReadMore } = props
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
      <PreviewImage src={mePortraitImg} />
      <AnimatedName />
      <NavigateMoreButton onClick={onReadMore} style={showMoreButtonStyled}>
        Check My Skills
      </NavigateMoreButton>
    </PreviewContent>
  )
}

export default HomePreview

import React from 'react'
import { NavigateMoreButton, PreviewContent } from '../PreviewContent'
import AnimatedName from '../../AnimatedName'
import { useSpring } from 'react-spring'
import { easeExpOut } from 'd3-ease'

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
      <AnimatedName />
      <NavigateMoreButton style={showMoreButtonStyled}>
        Read More
      </NavigateMoreButton>
    </PreviewContent>
  )
}

export default HomePreview

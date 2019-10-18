import React from 'react'
import { SpringConfig, useSpring } from 'react-spring'
import { easeExpInOut, easeExpOut } from 'd3-ease'
import {
  NavigateMoreButton,
  PreviewContent,
  PreviewImage,
} from '../PreviewContent'
import AnimatedName from '../../AnimatedName'
import mePortraitImg from '../../../images/Me Portrait.jpg'

interface Props {
  onScroll: (scrollNum: number, config: SpringConfig) => void
}

/**
 * Home preview content (img + text)
 */
function HomePreview(props: Props | any) {
  const { onScroll } = props
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

  const handleScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    onScroll(600, { duration: 1400, easing: easeExpInOut })
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

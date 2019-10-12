import styled from 'styled-components'
import { animated } from 'react-spring'
import meLandscapeImg from '../../images/Me Landscape.jpg'
import mePortraitImg from '../../images/Me Portrait.jpg'

export const Root = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 0px 32px;
  overflow: auto;
  background: ${({
    theme: {
      bg: { primary },
    },
  }) => primary};
  transition: background ${({ theme: { transitionSpeed } }) => transitionSpeed};
`

export const FullSizeImg = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  
  padding: 64px 15px 0 15px;
  background-image: url("${mePortraitImg}");
  @media (min-width: 375px) {
    padding: 64px 32px 0 32px;
  }
  @media (min-width: 480px) {
   background-image: url("${meLandscapeImg}");
    padding: 64px 32px 0 32px;
  }
  @media (min-width: 900px) {
    padding: 80px 80px 0 80px;
  }
  @media (min-width: 1280px) {
    padding: 128px 128px 0 128px;
  }
`

export const ContentName = styled('h1')`
  font-family: 'Chivo', sans-serif;
  font-weight: 700;
  font-size: 21px;
  margin-bottom: 28px;
  color: ${({
    theme: {
      color: { primary },
    },
  }) => primary};
`

export const PlainText = styled('p')`
  width: 100%;
  color: ${({
    theme: {
      color: { primary },
    },
  }) => primary};
  transition: color ${({ theme: { transitionSpeed } }) => transitionSpeed};
  @media (min-width: 650px) {
    letter-spacing: 1px;
    font-size: 18px;
  }
`

export const TextDivider = styled('div')`
  margin-bottom: 8px;
`

export const ContentHolder = styled(animated.div)`
  width: 100%;
  height: auto;
  @media (min-width: 650px) {
    width: 60%;
  }
`

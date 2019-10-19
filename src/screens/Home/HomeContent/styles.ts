import styled from 'styled-components'
import { animated } from 'react-spring'
import meLandscapeImg from '../../../images/Me Landscape.jpg'
import mePortraitImg from '../../../images/Me Portrait.jpg'

export const Root = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  height: 100%;
  padding: 0px 32px;
  padding-bottom: 64px;
  overflow: auto;
  background: ${({
    theme: {
      bg: { primary },
    },
  }) => primary};
  transition: background ${({ theme: { transitionSpeed } }) => transitionSpeed};
  backface-visibility: hidden;
`

export const ContentName = styled('h1')`
  font-family: 'Chivo', sans-serif;
  font-weight: 700;
  font-size: 21px;
  margin-bottom: 28px;
  margin-top: 64px;
  color: ${({
    theme: {
      color: { primary },
    },
  }) => primary};
  transition: color ${({ theme: { transitionSpeed } }) => transitionSpeed};
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
export const ChangeThemeButton = styled('div')`
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius: 8px;
  width: 250px;
  height: 40px;
  margin: 20px auto 60px;
  font-size: 25px;
  cursor: pointer;
  background: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.color.secondary}
  transition: background ${({ theme }) => theme.transitionSpeed};
`

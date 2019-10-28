import styled from 'styled-components'
import { animated } from 'react-spring'

export const Root = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  height: 100%;
  overflow: auto;
  background: ${({
    theme: {
      bg: { primary },
    },
  }) => primary};
  transition: background ${({ theme: { transitionSpeed } }) => transitionSpeed};
  will-change: background;
  backface-visibility: hidden;
`

export const ContentName = styled('h1')`
  font-family: 'Chivo', sans-serif;
  font-weight: 700;
  font-size: 21px;
  color: ${({
    theme: {
      color: { primary },
    },
  }) => primary};
  text-align: center;
  transition: color ${({ theme: { transitionSpeed } }) => transitionSpeed};

  margin-bottom: 48px;
  @media (min-width: 500px) {
    margin-bottom: 72px;
  }
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

export const StandOutText = styled('p')`
  width: 100%;
  color: ${({
    theme: {
      color: { primary },
    },
  }) => primary};
  transition: color ${({ theme: { transitionSpeed } }) => transitionSpeed};
  text-align: center;
  font-weight: 600;
  margin-bottom: 24px;
  @media (min-width: 650px) {
    letter-spacing: 1px;
    font-size: 38px;
    font-weight: 100;
  }
`

export const TextDivider = styled('div')`
  margin-bottom: 8px;
`

export const ContentWrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  margin-bottom: 32px;
  padding-top: 24px;
  @media (min-width: 500px) {
    padding-top: 32px;
  }
`

export const ChangeThemeButton = styled('div')`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  border-radius: 8px;
  width: 250px;
  height: 40px;
  margin: 20px auto 60px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.accent}
  text-align: center;
  transition: color ${({ theme }) => theme.transitionSpeed};
`

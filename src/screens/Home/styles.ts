import styled from 'styled-components'
import { animated } from 'react-spring'

export const Root = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 64px 32px;
  overflow: auto;
  background: ${({
    theme: {
      bg: { primary },
    },
  }) => primary};
  transition: background ${({ theme: { transitionSpeed } }) => transitionSpeed};
`

export const PlainText = styled('p')`
  width: 100%;
  color: ${({
    theme: {
      color: { primary },
    },
  }) => primary};
  transition: color ${({ theme: { transitionSpeed } }) => transitionSpeed};
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

import styled from 'styled-components'
import { animated } from 'react-spring'

export const Root = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 48px 20px;
  background: ${({
    theme: {
      bg: { primary },
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
`

export const ContentHolder = styled(animated.div)`
  width: 100%;
  height: auto;
  @media (min-width: 650px) {
    width: 60%;
  }
`

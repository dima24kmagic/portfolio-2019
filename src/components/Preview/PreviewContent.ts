import styled from 'styled-components'
import { animated } from 'react-spring'

export const PreviewContent = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  backface-visibility: hidden;

  padding: 64px 15px 0 15px;
  @media (min-width: 375px) {
    padding: 64px 32px 0 32px;
  }
  @media (min-width: 480px) {
    padding: 64px 32px 0 32px;
  }
  @media (min-width: 900px) {
    padding: 80px 80px 0 80px;
  }
  @media (min-width: 1280px) {
    padding: 128px 128px 0 128px;
  }
`

export const PreviewImage = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: ${({
    theme: {
      bg: { primary },
    },
  }) => primary};
  transition: background-color
    ${({ theme: { transitionSpeed } }) => transitionSpeed};
`

export const NavigateMoreButton = styled(animated.div)`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 100;
  font-size: 18px;
  color: ${({
    theme: {
      color: { primary },
    },
  }) => primary};
  &:hover {
    color: ${({
      theme: {
        color: { secondaryHover },
      },
    }) => secondaryHover};
  }
  cursor: pointer;
  transition: color ${({ theme: { transitionSpeed } }) => transitionSpeed};
  @media (min-width: 480px) {
    bottom: 80px;
  }
`

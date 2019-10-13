import styled from 'styled-components'
import { animated } from 'react-spring'
import { HamburgerSpin } from 'react-animated-burgers'

export const Wrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 0px;
  right: 0px;
  padding: 64px 24px;
  width: 50vw;
  min-width: 200px;
  max-width: 300px;
  height: 100vh;
  background: ${({
    theme: {
      bg: { secondary },
    },
  }) => secondary};
  z-index: 9999;
  transform: translate3d(100%, 0px, 0px);
  transition: background ${({ theme: { transitionSpeed } }) => transitionSpeed};
  will-change: transform;
`

export const BackdropFilter = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  cursor: pointer;
  outline: none;
  z-index: 9998;
`

export const HamburgerStyled = styled(HamburgerSpin)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
  outline: none;
  padding: 0;
  & div {
    width: 20px;
  }
  & span,
  & span::after,
  & span::before {
    width: 20px;
    height: 1px;
    background-color: ${({
      isActive,
      theme: {
        bg: { secondary },
        color: { secondary: secondaryColor },
      },
    }) => (isActive ? secondaryColor : secondary)};
    transition: bottom 0.3s ease-in,
      transform 0.4s 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  & span::before {
    top: -7px;
  }
  & span::after {
    bottom: ${({ isActive }) => (isActive ? '0px' : '-7px')};
  }
`

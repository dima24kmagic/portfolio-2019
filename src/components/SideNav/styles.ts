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
  transform: translateX(100%);
  transition: background 1s;
`

export const BackdropFilter = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
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
    transition: bottom 0.3s ease-out,
      transform 0.4s 0.35s cubic-bezier(0.215, 0.61, 0.355, 1), background 1s;
  }
  & span::before {
    top: -7px;
  }
  & span::after {
    bottom: ${({ isActive }) => (isActive ? '0px' : '-7px')};
  }
`

export const ChangeTheme = styled(animated.div)`
  color: ${({
    theme: {
      color: { themeColor },
    },
  }) => themeColor};
  padding-left: 5px;
  transition: color 1s;
  margin-top: 20px;
  font-weight: 900;
`

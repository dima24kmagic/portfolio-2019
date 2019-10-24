import { animated } from 'react-spring'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const MenuOptionWrapper = styled(animated.span)`
  margin-bottom: 12px;
`

export const MenuOption = styled(NavLink)`
  text-decoration: none;
  color: ${({
    theme: {
      color: { secondary },
    },
  }) => secondary};
  font-size: 18px;
  font-weight: 100;
  transition: color ${({ theme: { transitionSpeed } }) => transitionSpeed};
  padding-right: 8px;
  padding-left: 5px;
  &.active {
    color: ${({
      theme: {
        color: { secondaryHover },
      },
    }) => secondaryHover};
    font-weight: 900;
  }
  &:hover {
    color: ${({
      theme: {
        color: { secondaryHover },
      },
    }) => secondaryHover};
  }
`

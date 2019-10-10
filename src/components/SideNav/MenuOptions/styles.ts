import { animated } from 'react-spring'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const MenuOptionWrapper = styled(animated.span)`
  margin-bottom: 20px;
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
  transition: color 0.15s;
  padding-right: 8px;
  &.active {
    color: ${({
      theme: {
        color: { secondaryHover },
      },
    }) => secondaryHover};
    border-bottom: 2px solid
      ${({
        theme: {
          color: { secondaryHover },
        },
      }) => secondaryHover};
  }
  &:hover {
    color: ${({
      theme: {
        color: { secondaryHover },
      },
    }) => secondaryHover};
  }
`

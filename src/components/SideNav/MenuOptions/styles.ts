import {animated} from "react-spring";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

export const MenuOptionWrapper = styled(animated.span)`
  margin-bottom: 20px;
`;

export const MenuOption = styled(NavLink)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  font-weight: 100;
  transition: color 0.15s;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
  &.active {
    color: hotpink;
  }
`;
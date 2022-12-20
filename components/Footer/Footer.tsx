import React from 'react'
import styled from 'styled-components'
import {
  Typography,
  TypographyColors,
  TypographyWeight,
} from '../StyledComponents'

export interface IFooterProps {}

const Root = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 164px;
  width: 100%;
  background: #000;
`
/**
 * Footer
 */
function Footer(props: IFooterProps) {
  const {} = props
  return (
    <Root>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <Typography
        color={TypographyColors.Secondary}
        weight={TypographyWeight.Light}
        fontSize="18px"
      >
        Dzmitry Baranau ({new Date().getFullYear()})️ 🌟
      </Typography>
    </Root>
  )
}

export default Footer

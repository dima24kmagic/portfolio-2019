import React from 'react'
import styled from 'styled-components'
import {
  Typography,
  TypographyColors,
  TypographyWeight,
} from '../StyledComponents'

export interface IFooterProps {}

const Root = styled.div`
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
      <Typography
        color={TypographyColors.Secondary}
        weight={TypographyWeight.Light}
        fontSize="18px"
      >
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        Dzmitry Baranau (2020) <span role="img">❤️</span>
      </Typography>
    </Root>
  )
}

export default Footer

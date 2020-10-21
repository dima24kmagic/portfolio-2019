import React from 'react'
import styled, { css } from 'styled-components'
import {
  Typography,
  TypographyColors,
  TypographyWeight,
} from '../../../components/StyledComponents'
import InitiativeButtons from './components/InitiativeButtons'

export interface IInterestedProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 95px 0;

  ${({
    theme: {
      breakpoints: { md },
    },
  }) => md} {
    padding: 64px 0;
  }
  ${({
    theme: {
      breakpoints: { sm },
    },
  }) => sm} {
    padding: 52px 0;
  }
`

/**
 * Section for action initiation
 */
function Interested(props: IInterestedProps) {
  const {} = props
  return (
    <Root>
      <Typography
        weight={TypographyWeight.Bold}
        fontSize="64px"
        color="#282828"
        textAlign="center"
        mB="14px"
        customStyles={css`
          ${({
            theme: {
              breakpoints: { sm },
            },
          }) => sm} {
            font-size: 52px;
            margin-bottom: 10px;
          }
          ${({
            theme: {
              breakpoints: { xxs },
            },
          }) => xxs} {
            font-size: 48px;
            margin-bottom: 10px;
          }
        `}
      >
        Interested?
      </Typography>
      <Typography
        weight={TypographyWeight.Regular}
        fontSize="24px"
        color={TypographyColors.Secondary}
        textAlign="center"
        mB="52px"
        customStyles={css`
          ${({
            theme: {
              breakpoints: { sm },
            },
          }) => sm} {
            font-size: 20px;
            margin-bottom: 52px;
          }
          ${({
            theme: {
              breakpoints: { xxs },
            },
          }) => xxs} {
            font-size: 18px;
            margin-bottom: 44px;
          }
        `}
      >
        to get more info
      </Typography>
      <InitiativeButtons />
    </Root>
  )
}

export default Interested

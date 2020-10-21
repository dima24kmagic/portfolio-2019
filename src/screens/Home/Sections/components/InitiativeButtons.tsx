import React from 'react'
import styled, { css } from 'styled-components'
import {
  Button,
  Typography,
  TypographyColors,
  TypographyWeight,
} from '../../../../components/StyledComponents'

export interface IInitiativeButtonsProps {}

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;

  ${({
    theme: {
      breakpoints: { md },
    },
  }) => md} {
    width: 80%;
    flex-direction: column;
  }
`

const Link = styled.a`
  ${({
    theme: {
      breakpoints: { md },
    },
  }) => md} {
    width: 100%;
    background: #0b0b0b;
    border-radius: 8px;
  }
`

/**
 * Buttons to initiate action
 */
function InitiativeButtons(props: IInitiativeButtonsProps) {
  const {} = props
  return (
    <ButtonsWrapper>
      <Link
        // eslint-disable-next-line global-require
        href={require('../../../../res/PDF Portfolio.pdf')}
        download="FrontendDev_Dzmitry_Baranau_Portfolio"
      >
        <Button
          tabIndex={-1}
          width="218px"
          customStyle={css`
            ${({
              theme: {
                breakpoints: { md },
              },
            }) => md} {
              width: 100%;
              background: #0b0b0b;
            }
          `}
        >
          <Typography
            customStyles={css`
              z-index: 10;
            `}
            fontSize="20px"
          >
            Download CV
          </Typography>
        </Button>
      </Link>
      <Typography
        customStyles={css`
          z-index: 10;
          ${({
            theme: {
              breakpoints: { md },
            },
          }) => md} {
            margin-bottom: 8px;
            margin-top: 8px;
          }
        `}
        weight={TypographyWeight.Light}
        color={TypographyColors.Secondary}
        fontSize="16px"
        letterSpacing={2}
      >
        or
      </Typography>
      <Button
        width="218px"
        background="#4B65EB"
        bgHover="#5670f3"
        customStyle={css`
          ${({
            theme: {
              breakpoints: { md },
            },
          }) => md} {
            width: 100%;
          }
        `}
      >
        <Typography
          customStyles={css`
            z-index: 10;
          `}
          weight={TypographyWeight.SemiBold}
          fontSize="24px"
        >
          Contact Me
        </Typography>
      </Button>
    </ButtonsWrapper>
  )
}

export default InitiativeButtons

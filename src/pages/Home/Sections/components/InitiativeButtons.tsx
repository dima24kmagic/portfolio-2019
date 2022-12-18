import React from 'react'
import styled, { css } from 'styled-components'
import {
  Button,
  Typography,
  TypographyColors,
  TypographyWeight,
} from '../../../../components/StyledComponents'
import { theme } from '../../../../theme/theme'

export interface IInitiativeButtonsProps {
  onContactMeClick: () => void
  isModalOpen: boolean
}

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;

  ${theme.breakpoints.md} {
    width: 80%;
    flex-direction: column;
  }
`

const Link = styled.a`
  ${theme.breakpoints.md} {
    width: 100%;
    background: #0b0b0b;
    border-radius: 8px;
  }
`

/**
 * Buttons to initiate action
 */
function InitiativeButtons(props: IInitiativeButtonsProps) {
  const { onContactMeClick, isModalOpen } = props
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
            ${theme.breakpoints.md} {
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
          ${theme.breakpoints.md} {
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
        aria-haspopup="true"
        aria-expanded={isModalOpen}
        width="218px"
        background="#4B65EB"
        bgHover="#5670f3"
        onClick={onContactMeClick}
        customStyle={css`
          ${theme.breakpoints.md} {
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

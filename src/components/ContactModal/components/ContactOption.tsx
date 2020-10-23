import React from 'react'
import styled, { css } from 'styled-components'
import {
  Button,
  GradientTypography,
  TypographyWeight,
} from '../../StyledComponents'

export interface IContactOptionProps {
  label: string
  href: string
  options: any
  gradient?: string
  copyLabel: string
  copyValue: string
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 18px;
`

/**
 * Contact option
 */
const ContactOption = ({
  label,
  href,
  options,
  gradient,
  copyLabel,
  copyValue,
}: IContactOptionProps) => {
  return (
    <Root>
      <a href={href} {...options}>
        <GradientTypography
          customStyles={css`
            background: ${gradient};
          `}
          weight={TypographyWeight.Black}
          tag="span"
          textAlign="center"
          width="fit-content"
          mB="4px"
          fontSize="42px"
        >
          {label}
        </GradientTypography>
      </a>
      <Button
        pure
        customStyle={css`
          &:focus {
          }
        `}
      >
        <GradientTypography
          customStyles={css`
            background: ${gradient};
          `}
          weight={TypographyWeight.Thin}
          tag="p"
          textAlign="center"
          width="fit-content"
          fontSize="14px"
        >
          {copyLabel}
        </GradientTypography>
      </Button>
    </Root>
  )
}

export default ContactOption

import React, { useRef } from 'react'
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

  ${({
    theme: {
      breakpoints: { md },
    },
  }) => md} {
    align-items: center;
  }
`

const ValueToCopy = styled.textarea`
  width: 1px;
  height: 1px;
  clip: rect(0, 0);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
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
  const textAreaRef = useRef<HTMLTextAreaElement>()
  const handleCopy = () => {
    textAreaRef.current.select()
    document.execCommand('copy')
    textAreaRef.current.blur()
  }
  return (
    <Root>
      <ValueToCopy
        tabIndex={-1}
        aria-hidden="true"
        ref={textAreaRef}
        value={copyValue}
      />
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
        onClick={handleCopy}
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

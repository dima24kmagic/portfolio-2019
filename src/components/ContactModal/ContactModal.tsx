import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import ContactOption, { IContactOptionProps } from './components/ContactOption'
import {
  Button,
  IButtonProps,
  Typography,
  TypographyWeight,
} from '../StyledComponents'

export interface IContactModalProps {
  onClose: () => void
}

const BGOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(21, 21, 21, 0.75);
  z-index: 95;
`

const Root = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 915px;
  max-width: 90%;
  height: 571px;
  max-height: 80vh;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 77px 179px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 100;
`

const SidePanel = styled.div`
  width: 240px;
  height: 100%;
  background: linear-gradient(171.72deg, #7959d6 0%, #751644 97.85%);
  box-shadow: 8px 0px 32px #929292;
  border-radius: 8px 0px 0px 8px;

  ${({
    theme: {
      breakpoints: { sm },
    },
  }) => sm} {
    display: none;
  }
`

const ContactOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 76px;
  margin-top: 90px;
`

const CloseButton = styled(Button)<IButtonProps>`
  --closeButtonContentColor: #757474;

  display: flex;
  align-items: center;
  position: absolute;
  right: 32px;
  top: 28px;
  color: var(--closeButtonContentColor);

  transition: color 0.15s;

  &:hover,
  &:focus {
    --closeButtonContentColor: #212121;
  }
`

interface ICloseIconProps {
  size?: number
}
const CloseIcon = styled.div<ICloseIconProps>`
  --closeIconSize: ${({ size = 16 }) => size}px;
  width: var(--closeIconSize);
  height: var(--closeIconSize);
  position: relative;
  transform: rotate(45deg);

  &::after {
    content: '';
    width: 1px;
    height: var(--closeIconSize);
    background: var(--closeButtonContentColor);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    transition: color 0.15s;
  }
  &::before {
    content: '';
    width: 1px;
    height: var(--closeIconSize);
    background: var(--closeButtonContentColor);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    transition: color 0.15s;
  }
`

const contactOptions: IContactOptionProps[] = [
  {
    label: 'E-mail',
    href: 'mailto: dimabaranov98@gmail.com',
    options: {},
    gradient: 'linear-gradient(45deg, #A715CB, #5553C6)',
    copyLabel: 'click to copy address',
    copyValue: 'dimabaranov98@gmail.com',
  },
  {
    label: 'Phone call',
    href: 'tel:80447278635',
    options: {},
    gradient: 'linear-gradient(45deg, #F257A1, #EF8F00)',
    copyLabel: 'click to copy phone number',
    copyValue: '80447278635',
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/dzmitry-baranau-b96106159',
    options: {
      target: '_blank',
    },
    gradient: 'linear-gradient(45deg, #216CDC, #009DCF)',
    copyLabel: 'click to copy profile url',
    copyValue: 'https://www.linkedin.com/in/dzmitry-baranau-b96106159',
  },
]

/**
 * Modal with contact options
 */
function ContactModal(props: IContactModalProps) {
  const { onClose } = props
  const closeButtonRef = useRef<HTMLButtonElement>()
  useEffect(() => {
    closeButtonRef.current.focus()
  })
  return (
    <>
      <Root>
        <SidePanel />
        <CloseButton
          ref={closeButtonRef}
          aria-labelledby="modalTitle"
          onClick={onClose}
          pure
        >
          <Typography
            letterSpacing={5}
            fontSize="14px"
            weight={TypographyWeight.Regular}
            customStyles={css`
              text-transform: uppercase;
              margin-right: 4px;
            `}
          >
            Close
          </Typography>
          <CloseIcon />
        </CloseButton>
        <ContactOptionsWrapper>
          <Typography
            id="modalTitle"
            color="#424242"
            fontSize="62px"
            mB="24px"
            weight={TypographyWeight.ExtraThin}
          >
            Contact me with
          </Typography>
          {contactOptions.map((option) => (
            <ContactOption {...option} key={option.label} />
          ))}
        </ContactOptionsWrapper>
      </Root>
      <BGOverlay />
    </>
  )
}

export default ContactModal

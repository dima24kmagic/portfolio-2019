import React, { useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import ContactOption, { IContactOptionProps } from './components/ContactOption'
import {
  Button,
  IButtonProps,
  Typography,
  TypographyWeight,
} from '../StyledComponents'
import { theme } from '../../theme/theme'

export interface IContactModalProps {
  onClose: () => void
}

const BGOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(21, 21, 21, 0.75);
  z-index: 95;
`

const Root = styled.dialog`
  display: flex;
  position: absolute;
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
  outline: none;
  ${theme.breakpoints.md} {
    flex-direction: column;
    align-items: center;
  }
`

const SidePanel = styled.div`
  width: 240px;
  height: 100%;
  background: linear-gradient(171.72deg, #7959d6 0%, #751644 97.85%);
  box-shadow: 8px 0px 32px #929292;

  ${theme.breakpoints.md} {
    width: 100%;
    height: 72px;
  }
`

const ContactOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 76px;
  margin-top: 90px;

  ${theme.breakpoints.md} {
    margin-top: 54px;
    margin-left: 0;
    align-items: center;
  }

  ${theme.breakpoints.xs} {
    margin-top: 38px;
    margin-left: 0;
    align-items: center;
  }
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

  ${theme.breakpoints.md} {
    --closeButtonContentColor: #e3e3e3;

    &:hover,
    &:focus {
      --closeButtonContentColor: #ffffff;
    }
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
  const rootRef = useRef<HTMLDialogElement>()
  useEffect(() => {
    rootRef.current.focus()
  })
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }
  const preventClosingOnClick = (e) => {
    e.stopPropagation()
  }

  // TODO: Trap focus in dialog only
  // TODO: Animate dialog
  return (
    <BGOverlay onClick={onClose}>
      <Root
        onClick={preventClosingOnClick}
        onKeyDown={handleKeyDown}
        aria-modal="true"
        role="dialog"
        aria-labelledby="modalTitle"
        ref={rootRef}
        tabIndex={0}
      >
        <SidePanel />
        <CloseButton onClick={onClose} pure>
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
            tag="h4"
            id="modalTitle"
            color="#424242"
            fontSize="62px"
            mB="24px"
            weight={TypographyWeight.ExtraThin}
            customStyles={css`
              ${theme.breakpoints.l} {
                font-size: 52px;
              }

              ${theme.breakpoints.xs} {
                font-size: 38px;
              }

              ${theme.breakpoints.xxs} {
                font-size: 30px;
              }
            `}
          >
            Contact me with
          </Typography>
          {contactOptions.map((option) => (
            <ContactOption {...option} key={option.label} />
          ))}
        </ContactOptionsWrapper>
      </Root>
    </BGOverlay>
  )
}

export default ContactModal

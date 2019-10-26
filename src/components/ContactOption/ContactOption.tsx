import React from 'react'
import CopyTextVal from '../CopyTextVal'
import { animated } from 'react-spring'
import styled from 'styled-components'

interface Props {
  name: string
  value: string
  type: string
  copyPlaceholder: string
  href: string
  rel?: string
  target?: string
}

const Root = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`

const ContactInfo = styled(animated.a)`
  font-weight: 900;
  font-family: 'Chivo', sans-serif;
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  text-align: center;
  transition: color ${({ theme }) => theme.transitionSpeed};
  &:hover {
    color: ${({ theme }) => theme.color.primaryHover};
  }

  font-size: 48px;
  @media (min-width: 500px) {
    font-size: 62px;
  }
  @media (min-width: 650px) {
    font-size: 120px;
  }
`

/**
 * Contact option
 */
function ContactOption(props: Props) {
  const {
    name,
    value,
    type,
    copyPlaceholder,
    href,
    rel = '',
    target = '',
  } = props
  return (
    <Root>
      <ContactInfo rel={rel} target={target} href={href}>
        {name}
      </ContactInfo>
      <CopyTextVal topMargin={-22} type={type} value={value}>
        {`or click here to copy ${copyPlaceholder}`}
      </CopyTextVal>
    </Root>
  )
}

export default ContactOption

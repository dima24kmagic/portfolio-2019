import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import ScrollContextProvider from '../../components/SmoothScroll'
import { Root, StandOutText } from '../screenStyles'
import CopyTextVal from '../../components/CopyTextVal'
import ContactOption from '../../components/ContactOption'

interface Props {}

const OptionsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
`

const ContentWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  margin-bottom: 32px;
  padding-top: 64px;
  @media (min-width: 500px) {
    padding-top: 108px;
  }
`

/**
 * ContactPage page
 */
function Contact(props: Props) {
  const {} = props
  const contactOptions = [
    {
      name: 'EMAIL ME',
      href: 'mailto:vajnoe-dima@mail.ru',
      type: 'email',
      copyPlaceholder: 'email',
      value: 'vajnoe-dima@mail.ru',
    },
    {
      name: 'CALL ME',
      href: 'tel:+375447278635',
      type: 'text',
      copyPlaceholder: 'phone num',
      value: '+375447278635',
    },
    {
      name: 'LINKEDIN ME',
      href: 'https://www.linkedin.com/in/deema-baranov-b96106159/',
      type: 'text',
      copyPlaceholder: 'linkedin url',
      value: 'https://www.linkedin.com/in/deema-baranov-b96106159/',
      rel: 'noreferrer noopener',
      target: '_blank',
    },
  ]
  return (
    <ScrollContextProvider>
      <Root>
        <ContentWrapper
          style={{ height: '100vh', marginBottom: 0, alignItems: 'center' }}
        >
          <StandOutText>Click To</StandOutText>
          <OptionsWrapper>
            {contactOptions.map(contactOption => (
              <ContactOption {...contactOption} />
            ))}
          </OptionsWrapper>
        </ContentWrapper>
      </Root>
    </ScrollContextProvider>
  )
}

export default Contact

import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import ScrollContextProvider from '../../components/SmoothScroll'
import { Root, StandOutText } from '../screenStyles'
import CopyTextVal from '../../components/CopyTextVal'

interface Props {}

const ContactOption = styled(animated.div)`
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
  text-align:center;

  font-size: 48px;
  @media (min-width: 500px) {
    font-size: 62px;
  }
  @media (min-width: 650px) {
    font-size: 120px;
  }
`

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
  return (
    <ScrollContextProvider>
      <Root>
        <ContentWrapper
          style={{ height: '100vh', marginBottom: 0, alignItems: 'center' }}
        >
          <StandOutText>Click To</StandOutText>
          <OptionsWrapper>
            <ContactOption>
              <ContactInfo href="mailto:vajnoe-dima@mail.ru">
                EMAIL ME
              </ContactInfo>
              <CopyTextVal
                topMargin={-22}
                type="email"
                value="vajnoe-dima@mail.ru"
              >
                or click here to copy email
              </CopyTextVal>
            </ContactOption>
            <ContactOption>
              <ContactInfo href="tel:+375447278635">CALL ME</ContactInfo>
              <CopyTextVal topMargin={-22} type="text" value="+375447278635">
                or click here to copy phone num
              </CopyTextVal>
            </ContactOption>
            <ContactOption>
              <ContactInfo
                rel="noreferrer noopener"
                target="_blank"
                href="https://www.linkedin.com/in/deema-baranov-b96106159/"
              >
                LINKEDIN ME
              </ContactInfo>
              <CopyTextVal
                topMargin={-22}
                type="text"
                value="https://www.linkedin.com/in/deema-baranov-b96106159/"
              >
                or click here to copy linkedin url
              </CopyTextVal>
            </ContactOption>
          </OptionsWrapper>
        </ContentWrapper>
      </Root>
    </ScrollContextProvider>
  )
}

export default Contact

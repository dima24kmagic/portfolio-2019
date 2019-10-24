import React, { useRef } from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'
import { ContentName, PlainText, TextDivider } from '../styles'
import useContentSpring from '../hooks/useContentSpring'
import { useIsRefInView } from '../../../../components/SmoothScroll/ScrollContext'

interface Props {}

const ContentWrapper = styled(animated.div)`
  width: 100%;
  height: auto;
  padding-top: 64px;
  margin-bottom: 32px;
  max-width: 100%;
  @media (min-width: 650px) {
    width: 80%;
  }
  @media (min-width: 1250px) {
    width: 60%;
    max-width: 850px;
  }
  z-index: 2;
`

/**
 * Section with info about myself
 */
function InfoSection(props: Props) {
  const {} = props
  const contentRef = useRef()
  const isInView = useIsRefInView(contentRef, 400)
  const contentSpring = useContentSpring(isInView)
  return (
    <ContentWrapper ref={contentRef} style={contentSpring}>
      <ContentName>About Me</ContentName>
      <PlainText>
        Yo wasup guys I'm just cool-ass dev, who you wanna pay money.
      </PlainText>
      <PlainText>Looking for a remote part-time React Dev position;)</PlainText>
      <TextDivider />
      <PlainText>
        My ideal life is look like this - I sniffing cocaine outta model-hoe
        butt, on my yacht, somewhere in Mongo-Congo. While my multiple sources
        of income generating me enough money to buy this Mongo-Congo and install
        Solar Systems everywhere.
      </PlainText>
      <TextDivider />
      <PlainText>
        I would like to solve trash issue in the world, because I'm cool.
      </PlainText>
    </ContentWrapper>
  )
}

export default InfoSection

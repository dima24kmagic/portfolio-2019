import React, { useMemo, useRef } from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'
import { ContentName, PlainText, TextDivider } from '../styles'
import useContentSpring from '../hooks/useContentSpring'
import { useIsRefInView } from '../../../../components/SmoothScroll/ScrollContext'
import { checkIsMobile } from '../../../../utils'

interface Props {}

const ContentWrapper = styled(animated.div)`
  width: 100%;
  height: auto;
  margin-bottom: 32px;
  max-width: 100%;

  padding: 24px 24px 0;
  @media (min-width: 500px) {
    padding-top: 32px;
  }
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
function InfoSection() {
  const contentRef = useRef()
  const offsetValue = checkIsMobile() ? 150 : 200
  const isInView = useIsRefInView(contentRef, offsetValue)
  const contentSpring = useContentSpring(isInView)
  return (
    <ContentWrapper ref={contentRef} style={contentSpring}>
      {useMemo(
        () => (
          <>
            <ContentName>About Me</ContentName>
            <PlainText>
              Welcome Here! I'm just cool dude, who enjoy writing code and also
              I'm enjoying life.
            </PlainText>
            <PlainText>
              I'm Looking for a remote part-time React Dev position *of course
              we can discuss details and I can work in office;)*
            </PlainText>
            <TextDivider />
            <PlainText>
              My ideal life is look like this - I sniffing cocaine outta model
              butt, on my yacht, somewhere in Mongo-Congo. While my multiple
              sources of income generating me enough money to buy this
              Mongo-Congo and install Solar Systems everywhere.
            </PlainText>
            <TextDivider />
            <PlainText>
              I would like to solve trash issue in the world, because I'm cool.
            </PlainText>
            <TextDivider />
            <PlainText>Fantasy books lover :3</PlainText>
          </>
        ),
        [],
      )}
    </ContentWrapper>
  )
}

export default InfoSection

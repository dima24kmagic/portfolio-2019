import React, { useMemo, useRef } from 'react'
import styled from 'styled-components'
import { animated } from 'react-spring'
import { ContentName, PlainText, TextDivider } from '../../../screenStyles'
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
  const offsetValue = checkIsMobile() ? 150 : 250
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
              enjoying life.
            </PlainText>
            <PlainText>
              I'm Looking for a remote part-time React Dev position *of course
              we can discuss details and I can work in office;)*
            </PlainText>
            <TextDivider />
            <PlainText>
              My ideal position should involve such technologies as React, Redux
              for state management (I was working whole 2019 with
              Apollo-Client), I mean, that's was nice, but I want some control
              over my data because cache updates in apollo are kinda tough.
              Also, I want to build systems, where localStorage is used to
              reduce API calls as much as they can. + I wanna create beautiful
              UX for the components, achieving this with animations.
            </PlainText>
            <TextDivider />
            <PlainText>
              IMPORTANT: I don't work without a design or designer on board
            </PlainText>
            <TextDivider />
            <PlainText>
              Also, I would like to solve the trash issue in the world and
              install solar systems everywhere because I'm cool.
            </PlainText>
            <TextDivider />
            <PlainText>Fantasy books lover :3</PlainText>
            <TextDivider />
          </>
        ),
        [],
      )}
    </ContentWrapper>
  )
}

export default InfoSection

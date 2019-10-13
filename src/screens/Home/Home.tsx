import React from 'react'
import { withTheme } from 'styled-components'
import { useSpring } from 'react-spring'
import { easeExpOut } from 'd3-ease'
import {
  ContentHolder,
  ContentName,
  PlainText,
  Root,
  TextDivider,
} from './styles'
import { useToggleTheme } from '../../theme/theme'
import HomePreview from '../../components/Preview/HomePreview/HomePreview'

interface Props {}

/**
 * Home screen
 */
function Home(props: Props) {
  const contentSpring = useSpring({
    delay: 1450,
    from: {
      opacity: 0,
      transform: 'translate3d(0px, -8px, 0px)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0px, 0px, 0px)',
    },
    config: {
      duration: 1300,
      easing: easeExpOut,
    },
  })

  const toggleTheme = useToggleTheme()
  return (
    <>
      <HomePreview />
      <Root onClick={toggleTheme}>
        <ContentHolder style={contentSpring}>
          <ContentName>About Me</ContentName>
          <PlainText>
            Yo wasup guys I'm just cool-ass dev, who you wanna pay money.
          </PlainText>
          <PlainText>
            Looking for a remote part-time React Dev position;)
          </PlainText>
          <TextDivider />
          <PlainText>
            My ideal life is look like this - I sniffing cocaine outta model-hoe
            butt, on my yacht, somewhere in Mongo-Congo. While my multiple
            sources of income generating me enough money to buy this Mongo-Congo
            and install Solar Systems everywhere.
          </PlainText>
          <PlainText>
            I would like to solve trash issue in the world, because I'm cool.
          </PlainText>
        </ContentHolder>
      </Root>
    </>
  )
}

export default withTheme(Home)

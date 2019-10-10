import React from 'react'
import { withTheme } from 'styled-components'
import { ContentHolder, PlainText, Root } from './styles'
import AnimatedName from '../../components/AnimatedName'
import { useSpring, animated, config } from 'react-spring'

interface Props {}

/**
 * Home screen
 */
function Home(props: Props) {
  const contentSpring = useSpring({
    delay: 1000,
    from: {
      opacity: 0,
      transform: 'translateY(-4px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    config: config.slow,
  })
  return (
    <Root>
      <AnimatedName />
      <ContentHolder style={contentSpring}>
        <PlainText>
          Hey! I'm a passionate Front-End developer who really enjoys writing
          code I always try to work my best, accomplish all the tasks and
          achieve the desired result.
        </PlainText>
      </ContentHolder>
    </Root>
  )
}

export default withTheme(Home)

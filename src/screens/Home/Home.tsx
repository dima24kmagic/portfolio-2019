import React from 'react'
import { withTheme } from 'styled-components'
import { Root } from './styles'
import AnimatedName from '../../components/AnimatedName'

interface Props {}

/**
 * Home screen
 */
function Home(props: Props) {
  return (
    <Root>
      <AnimatedName />
    </Root>
  )
}

export default withTheme(Home)

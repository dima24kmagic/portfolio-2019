import React from 'react'
import styled from 'styled-components'
import heroImage from '../../res/images/42C1AECA-94DF-40DC-AD92-C1CFE3A63419_1_105_c.jpeg'
import {
  Button,
  HighlightWord,
  Typography,
  TypographyColors,
  TypographyWeight,
} from '../../components/StyledComponents'
import Introduction from './Sections/Introduction'
import Skills from './Sections/Skills'

export interface IHomeProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

/**
 * Home page
 */
function Home(props: IHomeProps) {
  const {} = props
  return (
    <Root>
      <Introduction />
      <Skills />
    </Root>
  )
}

export default Home

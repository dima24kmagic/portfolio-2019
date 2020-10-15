import React from 'react'
import styled from 'styled-components'
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

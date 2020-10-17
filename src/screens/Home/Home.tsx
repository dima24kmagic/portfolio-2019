import React from 'react'
import styled from 'styled-components'
import Introduction from './Sections/Introduction'
import Skills from './Sections/Skills'
import PastProjects from './Sections/PastProjects'

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
      <PastProjects />
    </Root>
  )
}

export default Home

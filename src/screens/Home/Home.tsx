import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Introduction from './Sections/Introduction'
import Skills from './Sections/Skills'
import PastProjects from './Sections/PastProjects'
import Interested from './Sections/Interested'
import Footer from '../../components/Footer'
import ContactModal from '../../components/ContactModal/ContactModal'

export interface IHomeProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  position: relative;
`

/**
 * Home page
 */
function Home(props: IHomeProps) {
  const {} = props
  const [isContactModalOpen, setContactModalOpen] = useState(false)
  const handleToggleContactModal = () =>
    setContactModalOpen(!isContactModalOpen)
  return (
    <Root>
      {isContactModalOpen && (
        <ContactModal onClose={handleToggleContactModal} />
      )}
      <Introduction
        isModalOpen={isContactModalOpen}
        onContactMeClick={handleToggleContactModal}
      />
      <Skills />
      <PastProjects />
      <Interested
        isModalOpen={isContactModalOpen}
        onContactMeClick={handleToggleContactModal}
      />
      <Footer />
    </Root>
  )
}

export default Home

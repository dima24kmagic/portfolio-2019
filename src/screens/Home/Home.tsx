import React from 'react'
import ScrollContextProvider from '../../components/SmoothScroll'
import HomeContent from './HomeContent'

interface Props {}

/**
 * HomePage screen
 */
function Home() {
  return (
    <ScrollContextProvider>
      <HomeContent />
    </ScrollContextProvider>
  )
}

export default Home

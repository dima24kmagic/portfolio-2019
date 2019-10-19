import React from 'react'
import ScrollContextProvider from '../../components/SmoothScroll'
import HomeContent from './HomeContent'

interface Props {}

/**
 * Home screen
 */
function Home(props: Props) {
  return (
    <ScrollContextProvider>
      <HomeContent />
    </ScrollContextProvider>
  )
}

export default Home

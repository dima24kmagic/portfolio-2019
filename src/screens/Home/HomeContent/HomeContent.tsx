import { easeExpInOut } from 'd3-ease'
import { useScroll } from '../../../components/SmoothScroll/ScrollContext'
import React, { useRef } from 'react'
import HomePreview from '../../../components/Preview/HomePreview'
import { Root } from './styles'
import SkillsSection from './SkillsSection'
import InfoSection from './InfoSection'

const HomeContent = (props: any) => {
  const { scrollToRef, scroll } = useScroll()

  const contentRef = useRef()
  const handleReadMore = () => {
    scrollToRef(contentRef, 0, { duration: 1200, easing: easeExpInOut })
  }
  const handleGoToTop = () => {
    scroll(0)
  }

  return (
    <div>
      <HomePreview onReadMore={handleReadMore} />
      <Root onClick={handleGoToTop} ref={contentRef}>
        <SkillsSection />
        <InfoSection />
      </Root>
    </div>
  )
}

export default HomeContent

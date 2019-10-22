import React, { useRef } from 'react'
import { easeExpInOut } from 'd3-ease'
import { useScroll } from '../../../components/SmoothScroll/ScrollContext'
import HomePreview from '../../../components/Preview/HomePreview'
import { ChangeThemeButton, PlainText, Root } from './styles'
import SkillsSection from './SkillsSection'
import InfoSection from './InfoSection'
import { useToggleTheme } from '../../../theme/theme'

const HomeContent = (props: any) => {
  const { scrollToRef } = useScroll()
  const toggleTheme = useToggleTheme()

  const contentRef = useRef()
  const handleReadMore = () => {
    scrollToRef(contentRef, 0, { duration: 1200, easing: easeExpInOut })
  }
  return (
    <div>
      <HomePreview onReadMore={handleReadMore} />
      <Root ref={contentRef}>
        <SkillsSection />
        <InfoSection />

        <ChangeThemeButton onClick={toggleTheme}>
          Want some more? Change Theme!)
        </ChangeThemeButton>
      </Root>
    </div>
  )
}

export default HomeContent

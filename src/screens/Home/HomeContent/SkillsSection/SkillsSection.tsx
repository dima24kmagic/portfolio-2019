import React from 'react'
import { ContentWrapper, ContentName } from '../styles'
import useContentSpring from '../hooks/useContentSpring'

interface Props {}

/**
 * Section with my skills
 */
function SkillsSection(props: Props) {
  const {} = props
  const contentSpring = useContentSpring()
  return (
    <ContentWrapper style={contentSpring}>
      <ContentName>My skills</ContentName>
    </ContentWrapper>
  )
}

export default SkillsSection

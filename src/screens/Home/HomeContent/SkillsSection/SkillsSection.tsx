import React from 'react'
import { ContentHolder, ContentName } from '../styles'
import useContentSpring from '../hooks/useContentSpring'

interface Props {}

/**
 * Section with my skills
 */
function SkillsSection(props: Props) {
  const {} = props
  const contentSpring = useContentSpring()
  return (
    <ContentHolder style={contentSpring}>
      <ContentName>My skills</ContentName>
    </ContentHolder>
  )
}

export default SkillsSection

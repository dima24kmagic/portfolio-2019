import React from 'react'
import { ContentName, ContentWrapper } from '../styles'
import { withTheme } from 'styled-components'
import useContentSpring from '../hooks/useContentSpring'
import { SkillCard, SkillCardsWrapper } from './skillsSectionStyles'

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
      <SkillCardsWrapper>
        <SkillCard>Skill</SkillCard>
        <SkillCard>Skill</SkillCard>
        <SkillCard>Skill</SkillCard>
        <SkillCard>Skill</SkillCard>
        <SkillCard>Skill</SkillCard>
        <SkillCard>Skill</SkillCard>
      </SkillCardsWrapper>
    </ContentWrapper>
  )
}

export default withTheme(SkillsSection)

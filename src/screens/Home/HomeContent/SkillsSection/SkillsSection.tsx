import React from 'react'
import { withTheme } from 'styled-components'
import { ContentName, ContentWrapper } from '../styles'
import useContentSpring from '../hooks/useContentSpring'
import { SkillCardsWrapper } from './skillsSectionStyles'
import SkillCard from '../../../../components/SkillCard'
import Skill from '../../../../types/Skill'

const skills: Skill[] = [
  { name: 'JavaScript', description: '', img: '' },
  { name: 'React', description: '', img: '' },
  { name: 'SASS', description: '', img: '' },
  { name: 'VCS', description: '', img: '' },
  { name: 'Soft Skills', description: '', img: '' },
  { name: 'Additional', description: '', img: '' },
]

/**
 * Section with my skills
 */
function SkillsSection() {
  const contentSpring = useContentSpring()
  return (
    <ContentWrapper style={contentSpring}>
      <ContentName>My Abilities</ContentName>
      <SkillCardsWrapper>
        {skills.map(skill => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </SkillCardsWrapper>
    </ContentWrapper>
  )
}

export default withTheme(SkillsSection)

import React from 'react'
import { withTheme } from 'styled-components'
import { ContentName, ContentWrapper } from '../styles'
import useContentSpring from '../hooks/useContentSpring'
import { SkillCard, SkillCardsWrapper, SkillName } from './skillsSectionStyles'

interface Skill {
  name: string
  img: string
  description: string
  subSkills?: Skill[]
}

const skills: Skill[] = [
  { name: 'JavaScript', description: '', img: '' },
  { name: 'React', description: '', img: '' },
  { name: 'SASS', description: '', img: '' },
  { name: 'VCS', description: '', img: '' },
  { name: 'Soft Skills', description: '', img: '' },
  { name: 'Additional', description: '', img: '' },
]

interface Props {
  skill: Skill
}
const SkillCardWrapper = ({ skill }: Props) => {
  const { img, description, name, subSkills } = skill
  return (
    <SkillCard>
      <SkillName>{name}</SkillName>
    </SkillCard>
  )
}

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
          <SkillCardWrapper key={skill.name} skill={skill} />
        ))}
      </SkillCardsWrapper>
    </ContentWrapper>
  )
}

export default withTheme(SkillsSection)

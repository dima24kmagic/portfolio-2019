import React from 'react'
import { Name, Wrapper } from './SkillCardStyles'
import Skill from '../../types/Skill'

interface Props {
  skill: Skill
}

/**
 * Card With skill
 */
function SkillCard({ skill }: Props) {
  const { img, description, name, subSkills } = skill
  return (
    <Wrapper>
      <Name>{name}</Name>
    </Wrapper>
  )
}

export default SkillCard

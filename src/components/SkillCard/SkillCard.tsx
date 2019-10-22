import React, { useState } from 'react'
import { AnimatedValue } from 'react-spring'
import { Icon, Name, ViewMoreButton, Wrapper } from './SkillCardStyles'
import SkillType from '../../types/SkillType'

interface Props {
  skill: SkillType
  style?: any
}

/**
 * Card With skill
 */
function SkillCard({ skill, style }: Props) {
  const { img, description, name, subSkills } = skill
  const [isClicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!isClicked)
  }
  if (isClicked) {
    return <div>More</div>
  }
  return (
    <Wrapper style={style} onCLick={handleClick}>
      <Name>{name}</Name>
      <Icon src={img} />
      <ViewMoreButton>Learn More</ViewMoreButton>
    </Wrapper>
  )
}

export default SkillCard

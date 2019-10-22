import React, { useState } from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import Underline from '../Underline'
import SkillType from '../../types/SkillType'

interface Props {
  skill: SkillType
  isSelected?: boolean
  onClick?: (skill: SkillType) => void
}

const Root = styled(animated.div)`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 16px;
  padding-bottom: 4px;
`

const SkillName = styled(animated.div)`
  display: inline-flex;
  padding: 0 12px;
  font-size: 72px;
  font-weight: 900;
  overflow: hidden;

  color: ${({ theme }) => theme.color.primary};
  transition: color 0.15s;
`

/**
 * SkillType
 */
function Skill(props: Props) {
  const { skill, isSelected, onClick } = props
  const { name } = skill
  const [isHovered, setHovered] = useState(false)
  const handleMouseIn = () => {
    setHovered(true)
  }
  const handleMouseOut = () => {
    setHovered(false)
  }
  const handleOnClick = () => {
    onClick(skill)
  }

  return (
    <Root
      onClick={handleOnClick}
      onFocus={handleMouseIn}
      onBlur={handleMouseOut}
      onMouseOver={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      <SkillName>
        {name}
        <Underline isShow={isSelected || isHovered} />
      </SkillName>
    </Root>
  )
}

export default Skill

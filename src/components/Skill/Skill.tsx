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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 16px;
  padding-bottom: 4px;

  width: 50%;
  @media (min-width: 320px) {
    width: 40%;
  }
  @media (min-width: 505px) {
    width: 30%;
  }
  @media (min-width: 950px) {
    width: auto;
  }
`

const SkillName = styled(animated.div)`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  padding: 0 12px;
  font-weight: 900;

  color: ${({ theme }) => theme.color.primary};
  transition: color 0.15s;

  font-size: 22px;
  @media (min-width: 370px) {
    font-size: 28px;
  }
  @media (min-width: 620px) {
    font-size: 36px;
    width: auto;
  }
  @media (min-width: 830px) {
    font-size: 48px;
    width: auto;
  }
  @media (min-width: 950px) {
    font-size: 72px;
    width: auto;
  }
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

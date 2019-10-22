import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import Underline from '../Underline'
import SkillType from '../../types/SkillType'

interface Props {
  skill: SkillType
  index?: number
}

const Root = styled(animated.div)`
  flex-grow: 1;
  position: absolute;
  top: 0;
  left: 0;
  height: 80%;
  cursor: pointer;
`

const BGBlend = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
`

const SkillImg = styled('img')`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -2;
`

const SkillName = styled(animated.div)`
  position: absolute;
  top: 30%;
  left: 30px;
  display: inline-flex;
  padding: 0 12px;
  font-size: 36px;
  font-weight: 300;
  overflow: hidden;

  color: ${({ theme }) => theme.color.primary};
  transition: color 0.15s;
`

/**
 * SkillType
 */
function Skill(props: Props) {
  const { skill, index } = props
  const { name, img } = skill
  const [isHovered, setHovered] = useState(false)
  const handleMouseIn = () => {
    setHovered(true)
  }
  const handleMouseOut = () => {
    setHovered(false)
  }

  const skillCardSpring = useSpring({
    from: {
      left: `${(100 / 6) * index}%`,
    },
    width: isHovered ? '25%' : `${100 / 6}%`,
  })

  return (
    <Root
      onFocus={handleMouseIn}
      onBlur={handleMouseOut}
      onMouseOver={handleMouseIn}
      onMouseLeave={handleMouseOut}
      style={skillCardSpring}
    >
      <BGBlend />
      <SkillImg src={img} />
      <SkillName index={1}>
        {name}
        <Underline isShow={isHovered} />
      </SkillName>
    </Root>
  )
}

export default Skill

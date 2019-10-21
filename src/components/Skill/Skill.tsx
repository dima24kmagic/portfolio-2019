import React, { useState, MouseEvent } from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import Underline from '../Underline'
import SkillDescription from './SkillDescription'
import DropDown from '../DropDown'

interface Props {
  name: string
  isSelected?: boolean
  onClick?: (skillName: string) => void
}

const Root = styled('div')`
  display: inline-flex;
  position: relative;
  margin-right: 32px;
  margin-bottom: 32px;
`

const SkillName = styled(animated.div)`
  display: inline-flex;
  position: relative;
  padding: 0 12px;
  font-size: 36px;
  font-weight: 300;
  cursor: pointer;
  overflow: hidden;

  color: ${({ theme }) => theme.color.primary};
  transition: color 0.15s;
`

/**
 * Skill
 */
function Skill(props: Props) {
  const { name, isSelected = true, onClick = () => {} } = props
  const [isHovered, setHovered] = useState(false)
  const handleMouseIn = () => {
    setHovered(true)
  }
  const handleMouseOut = () => {
    setHovered(false)
  }

  const handleOnClickAway = (e: MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    if (!e.target.classList.contains('skill-name')) {
      onClick('')
    }
  }

  const handleOnClick = () => {
    if (isSelected) {
      return onClick('')
    }
    return onClick(name)
  }

  return (
    <Root>
      <SkillName
        className="skill-name"
        onClick={handleOnClick}
        onFocus={handleMouseIn}
        onBlur={handleMouseOut}
        onMouseEnter={handleMouseIn}
        onMouseOut={handleMouseOut}
        index={1}
      >
        {name}
        <Underline isShow={isHovered || isSelected} />
      </SkillName>
      <DropDown isOpen={isSelected} onClickAway={handleOnClickAway}>
        <SkillDescription
          descriptions={[
            'Familiar with modern JavaScript syntax',
            'Familiar with Webpack, Babel.',
            'Understand closures, async programming (promises, async/await)',
          ]}
        />
      </DropDown>
    </Root>
  )
}

export default Skill

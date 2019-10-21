import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import { animated, useTrail } from 'react-spring'
import { ContentName, ContentWrapper } from '../styles'
import useContentSpring from '../hooks/useContentSpring'
import { SkillCardsWrapper } from './skillsSectionStyles'
import SkillType from '../../../../types/Skill'
import SkillCard from '../../../../components/SkillCard'
import Skill from '../../../../components/Skill'

const skills: SkillType[] = [
  {
    name: 'JavaScript',
    description:
      'Familiar with modern JS syntax. Understand how JS compiler works.',
    img: 'https://png.pngtree.com/svg/20170719/javascript_633988.png',
  },
  {
    name: 'React JS',
    description:
      'Creating components (typescript), State Management, Performance tracking, API integration, hooks, styling',
    img:
      'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
  },
  {
    name: 'SASS',
    description: '',
    img:
      'https://freeicons.io/laravel/public/uploads/icons/png/10958812621551942279-512.png',
  },
  {
    name: 'VCS',
    description: '',
    img: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
  },
  {
    name: 'Soft Skills',
    description: '',
    img:
      'https://cdn.pixabay.com/photo/2017/09/28/22/14/speech-icon-2797263_960_720.png',
  },
  {
    name: 'Additional',
    description: '',
    img:
      'https://upload.wikimedia.org/wikipedia/commons/6/61/Book-icon-orange.png',
  },
]

const SkillsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 650px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

/**
 * Section with my skills
 */
function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState('')

  const handleOnSkillClick = (skillName: string) => {
    setSelectedSkill(skillName)
  }
  const contentSpring = useContentSpring()
  return (
    <ContentWrapper style={contentSpring}>
      <ContentName>My Abilities</ContentName>
      <SkillsWrapper>
        {skills.map(({ name }) => {
          const isSelected = selectedSkill === name
          return (
            <Skill
              onClick={handleOnSkillClick}
              isSelected={isSelected}
              name={name}
              key={name}
            />
          )
        })}
      </SkillsWrapper>
    </ContentWrapper>
  )
}

export default withTheme(SkillsSection)

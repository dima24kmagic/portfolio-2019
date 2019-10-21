import React from 'react'
import { withTheme } from 'styled-components'
import { useTrail } from 'react-spring'
import { ContentName, ContentWrapper } from '../styles'
import useContentSpring from '../hooks/useContentSpring'
import { SkillCardsWrapper } from './skillsSectionStyles'
import Skill from '../../../../types/Skill'
import SkillCard from '../../../../components/SkillCard'

const skills: Skill[] = [
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

/**
 * Section with my skills
 */
function SkillsSection() {
  const contentSpring = useContentSpring()
  const trails = useTrail(skills.length, {
    delay: 4000,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })
  return (
    <ContentWrapper style={contentSpring}>
      <ContentName>My Abilities</ContentName>
      <SkillCardsWrapper>
        {trails.map((style, index) => {
          const skill = skills[index]
          return <SkillCard style={style} key={skill.name} skill={skill} />
        })}
      </SkillCardsWrapper>
    </ContentWrapper>
  )
}

export default withTheme(SkillsSection)

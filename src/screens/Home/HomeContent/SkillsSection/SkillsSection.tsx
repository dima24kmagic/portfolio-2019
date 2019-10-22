import React from 'react'
import styled, { withTheme } from 'styled-components'
import { ContentName, ContentWrapper } from '../styles'
import useContentSpring from '../hooks/useContentSpring'
import SkillType from '../../../../types/SkillType'
import Skill from '../../../../components/Skill'

const skills: SkillType[] = [
  {
    name: 'JavaScript',
    description:
      'Familiar with modern JS syntax. Understand how JS compiler works.',
    img: 'https://wallpapercave.com/wp/wp2465949.png',
  },
  {
    name: 'React JS',
    description:
      'Creating components (typescript), State Management, Performance tracking, API integration, hooks, styling',
    img:
      'https://c.wallhere.com/photos/0a/93/reactJS_JavaScript_Typescript_programming_programming_language_React_Native_Facebook_React-1568827.jpg!d',
  },
  {
    name: 'SASS',
    description: '',
    img: 'https://wpcron.files.wordpress.com/2015/01/sass-wallpaper.jpg ',
  },
  {
    name: 'VCS',
    description: '',
    img: 'https://images4.alphacoders.com/985/thumb-1920-985805.png',
  },
  {
    name: 'Soft Skills',
    description: '',
    img:
      'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Additional',
    description: '',
    img:
      'https://i.pinimg.com/originals/01/f7/9b/01f79b284c63082d29c82b8cb94c63d1.jpg',
  },
]

const SkillsWrapper = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (min-width: 650px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

/**
 * Section with my skills
 */
function SkillsSection() {
  const contentSpring = useContentSpring()
  return (
    <ContentWrapper style={contentSpring}>
      <ContentName>My Abilities</ContentName>
      <SkillsWrapper>
        {skills.map((skill, index) => {
          const { name } = skill
          return <Skill index={index} skill={skill} key={name} />
        })}
      </SkillsWrapper>
    </ContentWrapper>
  )
}

export default withTheme(SkillsSection)

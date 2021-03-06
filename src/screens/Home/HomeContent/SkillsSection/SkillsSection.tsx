import React, { useMemo, useRef, useState } from 'react'
import styled, { withTheme } from 'styled-components'
import { ContentName, ContentWrapper } from '../../../screenStyles'
import useContentSpring from '../hooks/useContentSpring'
import SkillType from '../../../../types/SkillType'
import Skill from '../../../../components/Skill'
import SkillDescription from '../../../../components/Skill/SkillDescription'
import { useIsRefInView } from '../../../../components/SmoothScroll/ScrollContext'
import { checkIsMobile } from '../../../../utils'

const skills: SkillType[] = [
  {
    name: 'JavaScript',
    description: [
      'Familiar with modern JS syntax',
      'Got JavaScript fundamentals, closures, async programming (promises, async/await)',
      'Knowledge of JS compiler inner working',
    ],
    img: 'https://wallpapercave.com/wp/wp2465949.png',
  },
  {
    name: 'React JS',
    description: [
      'Creating components (typescript)',
      'State Management with Redux, Apollo-Client',
      'Performance tracking',
      'API integration',
      'hooks',
      'Animations with react-spring',
      'styling',
    ],
    img:
      'https://c.wallhere.com/photos/0a/93/reactJS_JavaScript_Typescript_programming_programming_language_React_Native_Facebook_React-1568827.jpg!d',
  },
  {
    name: 'Styling',
    description: ['CSS', 'SASS', 'CSS-IN-JS', 'Writing styled in BEM'],
    img: 'https://wpcron.files.wordpress.com/2015/01/sass-wallpaper.jpg ',
  },
  {
    name: 'VCS',
    description: [
      'Familiar with Git',
      'Github',
      'Gitlab',
      'Able to code review Pull Requests',
      'Know how to fix merge conflicts (and also how to avoid them)',
    ],
    img: 'https://images4.alphacoders.com/985/thumb-1920-985805.png',
  },
  {
    name: 'Soft Skills',
    description: [
      "I'm always trying to listen to other people",
      'Not afraid to ask questions',
      "I got sort of aesthetics feels, tho I'm not always able to represent them in life :P",
    ],
    img:
      'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Additional',
    description: [
      'Familiar with linux terminal',
      'Made some apps with Electron and React',
      'Docker (basics, can install images etc)',
      "NodeJS (can write REST API if needed, but without any good architecture, because I don't have much of experience)",
      'Scrum workflow',
    ],
    img:
      'https://i.pinimg.com/originals/01/f7/9b/01f79b284c63082d29c82b8cb94c63d1.jpg',
  },
]

const SkillsWrapper = styled('div')`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding-right: 0px;
  flex-direction: column;
  @media (min-width: 950px) {
    flex-direction: row;
    padding-right: 64px;
  }
`

const SkillNames = styled('div')`
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: auto;

  padding: 0px;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 12px;
  border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  @media (min-width: 950px) {
    margin-bottom: 0px;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 0 32px;
    padding-right: 64px;
    border-right: 2px solid ${({ theme }) => theme.color.primary};
    border-bottom: none;
  }
`

const DescriptionWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 400px;
  width: 100%;
  min-height: 250px;
  padding-right: 16px;

  padding-left: 32px;
  align-items: center;
  margin-top: 32px;
  @media (min-width: 500px) {
    padding-left: 72px;
    margin-top: 72px;
    align-items: flex-start;
  }
  @media (min-width: 950px) {
  }
`

/**
 * Section with my skills
 */
function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0])
  const handleOnClick = (skill: SkillType) => {
    setSelectedSkill(skill)
  }

  const wrapperRef = useRef<HTMLDivElement>()
  const offsetValue = checkIsMobile() ? 200 : 400
  const isInView = useIsRefInView(wrapperRef, offsetValue)
  const contentSpring = useContentSpring(isInView)
  return (
    <ContentWrapper ref={wrapperRef} style={contentSpring}>
      {useMemo(
        () => (
          <>
            <ContentName>My Skills</ContentName>
            <SkillsWrapper>
              <SkillNames>
                {skills.map(skill => {
                  const { name } = skill
                  const isSelected = name === selectedSkill.name
                  return (
                    <Skill
                      isSelected={isSelected}
                      skill={skill}
                      key={name}
                      onClick={handleOnClick}
                    />
                  )
                })}
              </SkillNames>
              <DescriptionWrapper>
                <SkillDescription descriptions={selectedSkill.description} />
              </DescriptionWrapper>
            </SkillsWrapper>
          </>
        ),
        [selectedSkill],
      )}
    </ContentWrapper>
  )
}

export default withTheme(SkillsSection)

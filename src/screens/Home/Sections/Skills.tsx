import React from 'react'
import styled, { css } from 'styled-components'

import {
  Typography,
  TypographyColors,
  TypographyWeight,
} from '../../../components/StyledComponents'
import WithGlow from '../../../components/WithGlow/WithGlow'

export interface ISkillsProps {}

const Root = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #fff;
  height: auto;
  padding-top: 80px;
  padding-bottom: 120px;
`

const SkillsWrapper = styled.div`
  --skillsWrapperPaddingTop: 82px;
  --skillCardMarginBottom: 52px;
  --skillCardMarginRight: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  height: auto;
  // 82px is padding top, 51 is skill card height
  padding-top: var(--skillsWrapperPaddingTop);
  padding-bottom: calc(82px - var(--skillCardMarginBottom));
  padding-right: 0;
  padding-left: var(--skillCardMarginRight);
  background: linear-gradient(104.67deg, #060d20 -1.93%, #121a2e 110.39%);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15), 0px 29px 74px rgba(0, 0, 0, 0.2);
  border-radius: 64px;
  overflow: hidden;

  @media (max-width: 980px) {
    width: 80%;
    border-radius: 24px;
    padding: 28px 0px 28px 32px;
  }
  @media (max-width: 820px) {
    width: 90%;
    border-radius: 24px;
    padding: 28px 0px 28px 18px;
  }
  @media (max-width: 360px) {
    width: 100%;
    border-radius: 16px;
    padding: 28px 0px;
  }
`

const SkillRoot = styled.div`
  position: relative;
  margin-bottom: var(--skillCardMarginBottom);
  margin-right: 42px;

  @media (max-width: 980px) {
    margin-bottom: 32px;
    margin-right: 32px;
  }
  @media (max-width: 820px) {
    margin-bottom: 18px;
    margin-right: 18px;
  }
  @media (max-width: 360px) {
    margin-bottom: 18px;
    margin-right: 0;
  }
`

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #0d1427;
  border: 1px solid #475780;
  box-sizing: border-box;
  width: 280px;
  height: 124px;
  border-radius: 12px;
  position: relative;
  padding: 21px;
  z-index: 2;
`
const SkillLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`
const SkillImage = styled.img`
  width: 37px;
  height: 37px;
  margin-right: 8px;
  background: transparent;
  object-fit: cover;
`

interface ISkillProps {
  name: string
  description: string
  logoHref: string
}
const Skill = ({ description, logoHref, name }: ISkillProps) => {
  return (
    <WithGlow
      shadows={[
        {
          offsetX: 0,
          offsetY: 0,
          blur: 120,
          top: 0,
          left: 0,
          width: 176,
          height: 64,
          color: '#0094FF',
          spread: 5,
          borderRadius: '80px',
        },
        {
          offsetX: 0,
          offsetY: 0,
          blur: 120,
          top: 60,
          left: 100,
          width: 176,
          height: 64,
          color: '#2BB090',
          spread: 5,
          borderRadius: '80px',
        },
      ]}
    >
      <SkillRoot>
        <SkillWrapper>
          <SkillLogoWrapper>
            <SkillImage src={logoHref} alt={name} />
            <Typography
              fontSize="24px"
              weight={TypographyWeight.SemiBold}
              color={TypographyColors.Primary}
            >
              {name}
            </Typography>
          </SkillLogoWrapper>
          <Typography
            fontSize="16px"
            weight={TypographyWeight.Light}
            color="#88839A"
          >
            {description}
          </Typography>
        </SkillWrapper>
      </SkillRoot>
    </WithGlow>
  )
}

const skills: ISkillProps[] = [
  {
    name: 'React',
    description: 'Redux, Hooks, tests, animation, styleld, Apollo, material-ui',
    logoHref:
      'https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png',
  },
  {
    name: 'JavaScript',
    description: 'Typescript, async/await, promises, ES 6',
    logoHref:
      'https://optimasolution.co.id/web/images/icon_software/javascript%20-%20Copy%20(3).png',
  },
  {
    name: 'Styling',
    description: 'Styled, css, sass, css-in-js, bootstrap, material-ui',
    logoHref:
      'https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png',
  },
  {
    name: 'API integration',
    description: 'Async endpoints calls, GraphQL queries',
    logoHref: 'https://image.flaticon.com/icons/png/512/1485/1485231.png',
  },
  {
    name: 'Design',
    description: 'Worked and create with Figma, AdobeXD. Used Abstract',
    logoHref:
      'https://i.pinimg.com/originals/66/8c/cc/668cccb3f734f342e07c0185e6d9a975.png',
  },
  {
    name: 'Testing',
    description: 'Unit, Integration tests, jest, enzyme, react-testing-library',
    logoHref:
      'https://raw.githubusercontent.com/testing-library/react-testing-library/master/other/goat.png',
  },
  {
    name: 'NodeJS',
    description: 'Working with the endpoints, transforming and storing data',
    logoHref:
      'https://cdn4.iconfinder.com/data/icons/logos-3/504/node_js-512.png',
  },
  {
    name: 'Languages',
    description: 'English (C1) + Russian (native), Want to learn Spanish',
    logoHref:
      'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-06-512.png',
  },
  {
    name: 'Git + WMS',
    description: 'Github, gitlab, jira, asana, redmine (please no god)',
    logoHref:
      'https://icons-for-free.com/iconfiles/png/512/code+collaboration+github+network+round+social+icon-1320086084536018107.png',
  },
]

/**
 * Skills section
 */
function Skills(props: ISkillsProps) {
  const {} = props
  return (
    <Root>
      <Typography
        styles={css`
          display: inline-flex;
          background: linear-gradient(-10deg, #2bb0da 30%, #3c4de7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
        weight={TypographyWeight.Bold}
        fontSize="62px"
        tag="span"
        textAlign="center"
        width="fit-content"
        mB="24px"
      >
        Skills Stack
      </Typography>
      <SkillsWrapper>
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </SkillsWrapper>
    </Root>
  )
}

export default Skills

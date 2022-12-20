import React from "react";
import styled, { css } from "styled-components";

import {
  GradientTypography,
  Typography,
  TypographyColors,
  TypographyWeight,
} from "../StyledComponents";

import apiIcon from "../../static/icons/api-min.png";
import cssIcon from "../../static/icons/css.png";
import figmaIcon from "../../static/icons/figma-min.png";
import gitIcon from "../../static/icons/git-min.png";
import jsIcon from "../../static/icons/js-min.png";
import languagesIcon from "../../static/icons/languages-min.png";
import nodeIcon from "../../static/icons/nodejs-min.png";
import reactIcon from "../../static/icons/react-min.png";
import testingIcon from "../../static/icons/testing.png";
import cardGlow from "../../static/images/card-glow-min.png";
import { theme } from "../../theme/theme";

export interface ISkillsProps {}

const Root = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #fff;
  height: auto;
  padding-top: 80px;
  padding-bottom: 120px;
`;

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
  padding: var(--skillsWrapperPaddingTop) 0
    calc(82px - var(--skillCardMarginBottom)) var(--skillCardMarginRight);
  background: #060d20;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15), 0px 29px 74px rgba(0, 0, 0, 0.2);
  border-radius: 64px;
  overflow: hidden;
  max-width: 1400px;

  ${theme.breakpoints.l} {
    width: 80%;
    border-radius: 24px;
    padding: 28px 0px 28px 32px;
  }
  ${theme.breakpoints.md} {
    width: 90%;
    border-radius: 24px;
    padding: 64px 0px 28px 18px;
  }

  ${theme.breakpoints.xs} {
    width: 95%;
    border-radius: 24px;
    padding: 48px 0px 28px 0px;
  }

  ${theme.breakpoints.xxs} {
    width: 95%;
    border-radius: 8px;
    padding: 48px 0px 28px 0px;
  }
`;

const SkillRoot = styled.div`
  position: relative;
  margin-bottom: var(--skillCardMarginBottom);
  margin-right: 42px;

  ${theme.breakpoints.l} {
    margin-bottom: 32px;
    margin-right: 32px;
  }
  ${theme.breakpoints.md} {
    margin-bottom: 32px;
    margin-right: 18px;
  }
  ${theme.breakpoints.xs} {
    margin-bottom: 32px;
    margin-right: 0;
  }
  ${theme.breakpoints.xxs} {
    margin-bottom: 32px;
    margin-right: 0;
  }
`;

const SkillGlow = styled.span`
  position: absolute;
  background: url(${cardGlow.src});
  width: 480px;
  height: 350px;
  background-size: cover;
  top: -116px;
  left: -115px;
`;

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
`;
const SkillLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
const SkillImage = styled.img`
  width: 37px;
  height: 37px;
  margin-right: 8px;
  background: transparent;
  object-fit: cover;
`;

interface ISkillProps {
  name: string;
  description: string;
  logoHref: string;
}
const Skill = ({ description, logoHref, name }: ISkillProps) => {
  return (
    <SkillRoot>
      <SkillGlow />
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
  );
};

const skills: ISkillProps[] = [
  {
    name: "React",
    description: "Redux, Hooks, tests, animation, styleld, Apollo, material-ui",
    logoHref: reactIcon.src,
  },
  {
    name: "JavaScript",
    description: "Typescript, async/await, promises, ES 6",
    logoHref: jsIcon.src,
  },
  {
    name: "Styling",
    description: "Styled, css, sass, css-in-js, bootstrap, material-ui",
    logoHref: cssIcon.src,
  },
  {
    name: "API integration",
    description: "Async endpoints calls, GraphQL queries",
    logoHref: apiIcon.src,
  },
  {
    name: "Design",
    description: "Worked and create with Figma, AdobeXD. Used Abstract",
    logoHref: figmaIcon.src,
  },
  {
    name: "Testing",
    description: "Unit, Integration tests, jest, enzyme, react-testing-library",
    logoHref: testingIcon.src,
  },
  {
    name: "NodeJS",
    description: "Working with the endpoints, transforming and storing data",
    logoHref: nodeIcon.src,
  },
  {
    name: "Languages",
    description: "English (C1) + Russian (native), Want to learn Spanish",
    logoHref: languagesIcon.src,
  },
  {
    name: "Git + WMS",
    description: "Github, gitlab, jira, asana, redmine (please no god)",
    logoHref: gitIcon.src,
  },
  {
    name: "React Native",
    description: "Navigation, error tracking, performance optimization",
    logoHref: reactIcon.src,
  },
];

/**
 * Skills section
 */
function Skills(props: ISkillsProps) {
  const {} = props;
  return (
    <Root>
      <GradientTypography
        customStyles={css`
          background: linear-gradient(-10deg, #2bb0da 30%, #3c4de7);
          ${theme.breakpoints.xs} {
            font-size: 44px;
          }
        `}
        weight={TypographyWeight.Black}
        fontSize="62px"
        tag="h2"
        textAlign="center"
        width="fit-content"
        mB="24px"
      >
        Skills Stack
      </GradientTypography>
      <SkillsWrapper>
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </SkillsWrapper>
    </Root>
  );
}

export default Skills;

import React from 'react'
import styled from 'styled-components'
import {
  Typography,
  TypographyColors,
  TypographyWeight,
} from '../../../components/StyledComponents'

export interface ISkillsProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
  height: auto;
  padding-top: 80px;
`

/**
 * Skills section
 */
function Skills(props: ISkillsProps) {
  const {} = props
  return (
    <Root>
      <Typography
        fontSize={20}
        weight={TypographyWeight.SemiBold}
        color="rgba(0,0,0,0.04)"
        style={{
        }}
      >
        SOFTWARE ENGINEER FRONTEND DEVELOPER REACT JAVASCRIPT HTML SASS CSS
        ACCESSIBILITY EXPERIENCED NODEJS CODE REVIEW EPAM THOMSON REUTERS CANADA
        BELARUS
      </Typography>
    </Root>
  )
}

export default Skills

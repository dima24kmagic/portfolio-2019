import React from 'react'
import styled, { css } from 'styled-components'
import { Curve } from './Introduction'
import {
  Typography,
  TypographyWeight,
} from '../../../components/StyledComponents'

export interface IPastProjectsProps {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(118.15deg, #0e1a35 0.44%, #060d1e 98.94%);
  width: 100%;
  padding: 130px;
  position: relative;
  overflow: hidden;
`

/**
 * Past projects info
 */
function PastProjects(props: IPastProjectsProps) {
  const {} = props
  return (
    <Root>
      <Curve
        customStyles={css`
          top: -60px;
        `}
      />
      <Typography
        customStyles={css`
          display: inline-block;
          background: linear-gradient(-90deg, #f15077, #e8a364);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: red;
          ${({
            theme: {
              breakpoints: { xs },
            },
          }) => xs} {
            font-size: 44px;
          }
        `}
        weight={TypographyWeight.Black}
        fontSize="62px"
        tag="span"
        textAlign="center"
        width="fit-content"
        mB="24px"
      >
        Past Projects
      </Typography>
    </Root>
  )
}

export default PastProjects

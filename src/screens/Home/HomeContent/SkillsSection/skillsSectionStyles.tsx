import styled from 'styled-components'
import { animated } from 'react-spring'

export const SkillCardsWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 850px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

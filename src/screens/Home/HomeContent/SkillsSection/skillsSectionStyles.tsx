import styled from 'styled-components'
import { animated } from 'react-spring'

export const SkillCard = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: 80%;
  height: 40vh;
  background: ${({ theme }) => theme.skillCard.bg};
  margin-bottom: 32px;
  border-radius: 8px;
  @media (min-width: 850px) {
    width: calc(50% - 16px);
  }
  @media (min-width: 1600px) {
    width: 30%;
  }
`

export const SkillName = styled('div')`
  font-size: 20px;
  color: ${({ theme }) => theme.skillCard.color};
`

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

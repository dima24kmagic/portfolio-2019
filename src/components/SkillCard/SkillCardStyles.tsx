import { animated } from 'react-spring'
import styled from 'styled-components'

export const Wrapper = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 200px;
  background: ${({ theme }) => theme.skillCard.bg};
  padding: 24px 8px;
  margin-bottom: 32px;
  border-radius: 8px;

  transition: background ${({ theme }) => theme.transitionSpeed};

  width: 80%;
  @media (min-width: 850px) {
    width: calc(50% - 16px);
  }
  @media (min-width: 1600px) {
    max-height: 320px;
    width: 30%;
  }
`

export const Name = styled('div')`
  font-size: 30px;
  color: ${({ theme }) => theme.skillCard.color};
  font-weight: 900;
  font-family: 'Chivo', sans-serif;
  margin-bottom: 8px;
  transition: color ${({ theme }) => theme.transitionSpeed};
`

export const Icon = styled('img')`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 16px;
`

export const Description = styled('div')`
  font-size: 16px;
  color: ${({ theme }) => theme.skillCard.color};
  padding: 0 32px;
  text-align: center;
  transition: color ${({ theme }) => theme.transitionSpeed};
`

export const ViewMoreButton = styled('div')`
  font-size: 20px;
  color: ${({ theme }) => theme.skillCard.color};
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitionSpeed};
`

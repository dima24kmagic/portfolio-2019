import { animated, useTrail } from 'react-spring'
import React from 'react'
import styled from 'styled-components'
import { easeExpInOut } from 'd3-ease'

const OverflowWrapper = styled('div')`
  display: flex;
  justify-content: center;
  height: auto;
  overflow: hidden;
`

const H1 = styled(animated.h1)`
  font-weight: 900;
  font-family: 'Chivo', sans-serif;
  color: ${({
    theme: {
      color: { primary },
    },
  }) => primary};
  transition: color ${({ theme: { transitionSpeed } }) => transitionSpeed};
  text-shadow: 1px 1px 0px #b504ff, -1px -1px 0px hotpink;
  margin-bottom: 15px;

  font-size: 42px;
  @media (min-width: 375px) {
    font-size: 54px;
  }
  @media (min-width: 450px) {
    font-size: 54px;
    letter-spacing: 3px;
    line-height: 54px;
    text-shadow: 3px 3px 0px #b504ff, -3px -3px 0px hotpink;
  }
  @media (min-width: 650px) {
    font-size: 92px;
    letter-spacing: 3px;
    line-height: 86px;
  }
  @media (min-width: 1200px) {
    font-size: 140px;
    letter-spacing: 3px;
    line-height: 118px;
  }
`

const useNameAnimation = (introText: string[]) => {
  const introTextTrails = useTrail(introText.length, {
    from: {
      opacity: 0,
      transform: 'translate3d(0px, 100%, 0px)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0px, 0%, 0px)',
    },
    config: {
      duration: 2000,
      easing: easeExpInOut,
    },
  })

  const renderName = () =>
    introTextTrails.map((value, index) => {
      return (
        <OverflowWrapper key={introText[index]}>
          <H1 style={value}>{introText[index]}</H1>
        </OverflowWrapper>
      )
    })

  return { renderName }
}

export default useNameAnimation

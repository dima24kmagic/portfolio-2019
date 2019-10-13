import { animated, config, useTrail } from 'react-spring'
import React, { useRef } from 'react'
import styled from 'styled-components'
import { easeExpInOut } from 'd3-ease'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

const OverflowWrapper = styled('div')`
  height: auto;
  overflow: hidden;
`

const H1 = styled(animated.h1)`
  font-weight: 900;
  font-family: 'Chivo', sans-serif;
  color: ${({
    theme: {
      color: { secondary },
    },
  }) => secondary};
  text-shadow: 1px 1px 0px red, -1px -1px 0px hotpink;
  margin-bottom: 15px;

  font-size: 42px;
  @media (min-width: 375px) {
    font-size: 54px;
  }
  @media (min-width: 450px) {
    font-size: 54px;
    letter-spacing: 3px;
    line-height: 54px;
    text-shadow: 3px 3px 0px red, -3px -3px 0px hotpink;
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

const useNameAnimation = () => {
  const introText = ['Frontend Web-Dev', 'Dima Baranov']

  const introTextTrails = useTrail(introText.length, {
    from: {
      opacity: 0,
      transform: 'translateY(100%)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0%)',
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

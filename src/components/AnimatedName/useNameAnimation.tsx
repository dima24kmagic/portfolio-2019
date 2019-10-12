import { animated, config, useTrail } from 'react-spring'
import React from 'react'
import styled from 'styled-components'
import { easeExpInOut } from 'd3-ease'

const OverflowWrapper = styled('div')`
  height: auto;
  overflow: hidden;
`

const H1 = styled(animated.h1)`
  font-size: 62px;
  font-weight: 900;
  font-family: 'Chivo', sans-serif;
  color: ${({
    theme: {
      color: { black },
    },
  }) => black};
  text-shadow: 3px 3px 0px red, -3px -3px 0px hotpink;
  padding-left: 64px;
  @media (min-width: 650px) {
    font-size: 120px;
  }
`

const H1Name = styled(animated.h2)`
  font-size: 62px;
  font-weight: 900;
  font-family: 'Chivo', sans-serif;
  text-shadow: 3px 3px 0px hotpink, -3px -3px 0px red;
  padding-left: 64px;
  color: ${({
    theme: {
      color: { black },
    },
  }) => black};
  @media (min-width: 650px) {
    font-size: 120px;
  }
`

const useNameAnimation = () => {
  const introComponents = [H1, H1Name]
  const introText = ['Frontend Web-Dev', 'Dima Baranov']

  const introTextTrails = useTrail(introComponents.length, {
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
      const Text = introComponents[index]
      return (
        <OverflowWrapper key={introText[index]}>
          <Text style={value}>{introText[index]}</Text>
        </OverflowWrapper>
      )
    })

  return { renderName }
}

export default useNameAnimation

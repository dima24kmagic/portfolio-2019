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
  line-height: 60px;
  font-weight: 900;
  font-family: 'Chivo', sans-serif;
  text-align: center;
  margin-bottom: 10px;
  color: ${({
    theme: {
      color: { accent },
    },
  }) => accent};
  @media (min-width: 650px) {
    font-size: 68px;
  }
`

const H2 = styled(animated.h2)`
  font-size: 28px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 36px;
  color: ${({
    theme: {
      color: { primary },
    },
  }) => primary}};
`

const useNameAnimation = () => {
  const introComponents = [H1, H2]
  const introText = ['Frontend Web-Dev', 'Dima Baranov']

  const introTextTrails = useTrail(introComponents.length, {
    delay: 0,
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

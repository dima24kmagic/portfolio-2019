import { animated, config, useTrail } from 'react-spring'
import React from 'react'
import styled from 'styled-components'

const OverflowWrapper = styled('div')`
  height: auto;
  overflow: hidden;
`

const H1 = styled(animated.h1)`
  font-size: 68px;
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
`

const H2 = styled(animated.h2)`
  font-size: 20px;
  font-weight: 100;
  font-family: 'Chivo', sans-serif;
  text-align: center;
  margin-bottom: 10px;
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
    delay: 400,
    from: {
      opacity: 0,
      transform: 'translateY(100%)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0%)',
    },
    config: config.slow,
  })

  const renderName = () =>
    introTextTrails.map((value, index) => {
      const Text = introComponents[index]
      return (
        <OverflowWrapper>
          <Text key={introText[index]} style={value}>
            {introText[index]}
          </Text>
        </OverflowWrapper>
      )
    })

  return { renderName }
}

export default useNameAnimation

import { animated, config, useTrail } from 'react-spring'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled('div')`
  height: 60px;
  overflow: hidden;
`

const H1 = styled(animated.h1)`
  color: aliceblue;
  font-size: 4rem;
  font-weight: 900;
  font-family: 'Chivo', sans-serif;
  text-align: center;
`

const H2 = styled(animated.h2)`
  color: aliceblue;
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Chivo', sans-serif;
  text-align: center;
`

const useNameAnimation = () => {
  const introComponents = [H1, H2]
  const introText = ['Frontend Web-Dev', 'Dima Baranov']

  const introTextTrails = useTrail(introText.length, {
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
        <Wrapper>
          <Text key={introText[index]} style={value}>
            {introText[index]}
          </Text>
        </Wrapper>
      )
    })

  return renderName
}

export default useNameAnimation

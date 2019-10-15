import React from 'react'
import styled, { withTheme } from 'styled-components'
import useNameAnimation from './useNameAnimation'

interface Props {}

const Wrapper = styled('div')`
  width: 100%;
  margin-bottom: 28px;
  @media (min-width: 650px) {
    margin-bottom: 56px;
  }
`

/**
 * Animated Name
 */
function AnimatedName() {
  const introText = ['Frontend-Dev', 'Dima Baranov']
  const { renderName } = useNameAnimation(introText)
  return <Wrapper>{renderName()}</Wrapper>
}

export default withTheme(AnimatedName)

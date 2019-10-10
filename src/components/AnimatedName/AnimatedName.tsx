import React from 'react'
import styled, { withTheme } from 'styled-components'
import useNameAnimation from './useNameAnimation'

interface Props {}

const Wrapper = styled('div')`
  margin-bottom: 28px;
  @media (min-width: 650px) {
    margin-bottom: 56px;
  }
`

/**
 * Animated Name
 */
function AnimatedName() {
  const { renderName } = useNameAnimation()
  return <Wrapper>{renderName()}</Wrapper>
}

export default withTheme(AnimatedName)

import React from 'react'
import { withTheme } from 'styled-components'
import useNameAnimation from './useNameAnimation'

interface Props {}

/**
 * Animated Name
 */
function AnimatedName() {
  const renderName = useNameAnimation()
  return <>{renderName()}</>
}

export default withTheme(AnimatedName)

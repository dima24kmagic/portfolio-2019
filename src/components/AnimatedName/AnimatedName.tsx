import React from 'react'
import useNameAnimation from './useNameAnimation'

interface Props {}

/**
 * Animated Name
 */
function AnimatedName() {
  const renderName = useNameAnimation()
  return <>{renderName()}</>
}

export default AnimatedName

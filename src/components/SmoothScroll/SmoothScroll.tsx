import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const Scrollable = styled('div')`
  height: 100%;
  overflow-y: auto;
`

/**
 * Smooth scroll wrapper
 */
function SmoothScroll(props: Props) {
  const { children } = props
  return <div>{children}</div>
}

export default SmoothScroll

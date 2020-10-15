import React from 'react'
import styled from 'styled-components'
import { IShadowLightProps, ShadowLight } from '../StyledComponents'

export interface IWithGlowProps {
  children: any
  shadows: IShadowLightProps[]
}

const Root = styled.div`
  position: relative;
`

const ContentWrapper = styled.div`
  z-index: ${({ zIndex = 2 }: { zIndex?: number }) => zIndex};
`

/**
 * Wrapper to provide glow behind elements
 */
function WithGlow(props: IWithGlowProps) {
  const { children, shadows } = props
  return (
    <Root>
      {shadows.map((shadow) => (
        <ShadowLight {...shadow} />
      ))}
      <ContentWrapper>{children}</ContentWrapper>
    </Root>
  )
}

export default WithGlow

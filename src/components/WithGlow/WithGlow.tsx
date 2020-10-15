import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import { IShadowLightProps, ShadowLight } from '../StyledComponents'

export interface IWithGlowProps {
  children: any
  shadows: IShadowLightProps[]
  style?: CSSProperties
}

const Root = styled.span`
  position: relative;
`

const ContentWrapper = styled.div`
  z-index: ${({ zIndex = 2 }: { zIndex?: number }) => zIndex};
`

/**
 * Wrapper to provide glow behind elements
 */
function WithGlow(props: IWithGlowProps) {
  const { children, shadows, style } = props
  return (
    <Root style={style}>
      {shadows.map((shadow, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ShadowLight key={i} {...shadow} />
      ))}
      <ContentWrapper>{children}</ContentWrapper>
    </Root>
  )
}

export default WithGlow

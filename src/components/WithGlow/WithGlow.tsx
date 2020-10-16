import React, { CSSProperties } from 'react'
import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'
import { IShadowLightProps, ShadowLight } from '../StyledComponents'

export interface IWithGlowProps {
  children: any
  shadows: IShadowLightProps[]
  style?: FlattenInterpolation<ThemeProps<DefaultTheme>>
}

const Root = styled.span`
  position: relative;
  ${({
    customStyles,
  }: {
    customStyles: FlattenInterpolation<ThemeProps<DefaultTheme>>
  }) => customStyles}
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: ${({ zIndex = 2 }: { zIndex?: number }) => zIndex};
`

/**
 * Wrapper to provide glow behind elements
 */
function WithGlow(props: IWithGlowProps) {
  const { children, shadows, style } = props
  return (
    <Root customStyles={style}>
      {shadows.map((shadow, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <ShadowLight key={i} {...shadow} />
      ))}
      <ContentWrapper>{children}</ContentWrapper>
    </Root>
  )
}

export default WithGlow

import styled, {
  FlattenSimpleInterpolation,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
  css,
} from 'styled-components'
import React, { CSSProperties } from 'react'

export type ICustomStyles = FlattenInterpolation<ThemeProps<DefaultTheme>>
export enum TypographyColors {
  Primary = '#fff',
  Secondary = 'rgba(136, 131, 154, 1)',
}
export enum TypographyWeight {
  'Black' = '900',
  'Bold' = '700',
  'SemiBold' = '600',
  'Light' = '300',
  'Regular' = '400',
}
interface ITypographyProps {
  color?: TypographyColors | string
  fontSize: string
  letterSpacing?: number
  weight?: TypographyWeight | number
  mB?: string
  width?: string
  children?: any
  tag?: string
  textAlign?: string
  customStyles?: ICustomStyles
}
export const Typography = ({
  children = '',
  tag = 'p',
  customStyles = [''],
  ...other
}: ITypographyProps) => {
  // @ts-ignore
  const Tag = styled[tag]`
    color: ${other.color};
    margin-bottom: ${other.mB};
    letter-spacing: ${other.letterSpacing};
    font-size: ${other.fontSize};
    font-weight: ${other.weight};
    width: ${other.width};
    text-align: ${other.textAlign};
    ${customStyles}
  `
  return <Tag>{children}</Tag>
}

export const GradientTypography = ({
  customStyles,
  ...other
}: ITypographyProps) => {
  return (
    <Typography
      {...other}
      customStyles={css`
        ${customStyles};
        display: inline-block;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `}
    />
  )
}
export const HighlightWord = styled.span`
  color: rgba(183, 174, 214, 1);
`

interface IButtonProps {
  width?: string
  background?: string
  fontSize?: number
  fontWeight?: TypographyWeight
  customStyle?: ICustomStyles
}
export const Button = styled.button<IButtonProps>`
  width: ${({ width = 'auto' }) => width};
  background: ${({ background = '#171717' }) => background};
  font-size: ${({ fontSize = 20 }) => fontSize}px;
  font-weight: ${({ fontWeight = TypographyWeight.Regular }) => fontWeight};
  color: #fff;
  height: 52px;
  border: none;
  border-radius: 8px;

  ${({ customStyle }) => customStyle}
`

export interface IShadowLightProps {
  width: string
  height: string
  color: string
  blur: number
  spread?: number
  top: string
  left: string
  offsetX: number
  offsetY: number
  borderRadius?: number | string
  customStyles?: ICustomStyles
}
export const ShadowLight = styled.div<IShadowLightProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: transparent;
  box-shadow: ${({ offsetX }) => offsetX}px ${({ offsetY }) => offsetY}px
    ${({ blur }) => blur}px ${({ spread = 0 }) => spread}px
    ${({ color }) => color};
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  border-radius: ${({ borderRadius = 0 }) =>
    // @ts-ignore
    // eslint-disable-next-line no-restricted-globals
    `${borderRadius}${isNaN(borderRadius) ? '' : 'px'}`};

  ${({ customStyles }) => customStyles}
`

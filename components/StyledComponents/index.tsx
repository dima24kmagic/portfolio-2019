import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components'
import React, { HTMLAttributes } from 'react'

export type ICustomStyles = FlattenInterpolation<ThemeProps<DefaultTheme>>
export enum TypographyColors {
  Primary = '#fff',
  Secondary = 'rgba(136, 131, 154, 1)',
}
export enum TypographyWeight {
  ExtraThin = '100',
  Thin = '200',
  'Light' = '300',
  'Regular' = '400',
  'SemiBold' = '600',
  'Bold' = '700',
  'Black' = '900',
}
interface ITypographyProps extends HTMLAttributes<any> {
  color?: TypographyColors | string
  fontSize: string
  letterSpacing?: number
  weight?: TypographyWeight | number
  mB?: string
  width?: string
  children?: any
  tag?: any
  textAlign?: string
  customStyles?: ICustomStyles
}
const Text = styled.p<ITypographyProps>`
  color: ${({ color }) => color};
  margin-bottom: ${({ mB }) => mB};
  letter-spacing: ${({ letterSpacing }) => letterSpacing}px;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ weight }) => weight};
  width: ${({ width }) => width};
  text-align: ${({ textAlign }) => textAlign};
  ${({ customStyles }) => customStyles};
`
export const Typography = ({
  children = '',
  tag = 'p',
  customStyles,
  ...other
}: ITypographyProps) => {
  return (
    <Text {...other} customStyles={customStyles} as={tag}>
      {children}
    </Text>
  )
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

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  width?: string
  background?: string
  bgHover?: string
  fontSize?: number
  fontWeight?: TypographyWeight
  customStyle?: ICustomStyles
  pure?: boolean
}
export const Button = styled.button<IButtonProps>`
  --pureButtonPaddingX: 12px;
  --pureButtonPaddingY: 4px;

  ${({ pure = false }) =>
    !pure &&
    css<IButtonProps>`
      width: ${({ width = 'auto' }) => width};
      background: ${({ background = '#171717' }) => background};
      font-size: ${({ fontSize = 20 }) => fontSize}px;
      font-weight: ${({ fontWeight = TypographyWeight.Regular }) => fontWeight};
      color: #fff;
      height: 52px;
      border: none;
      &:hover {
        background: ${({ bgHover = '#1a1a1a' }) => bgHover};
      }
    `};

  ${({ pure = false }) =>
    pure &&
    css<IButtonProps>`
      background: transparent;
      width: auto;
      border: none;
      &:focus {
        outline: 1px solid #161616;
      }
    `};

  cursor: pointer;
  border-radius: 8px;

  transition: background-color 0.15s;

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
  will-change: box-shadow;

  ${({ customStyles }) => customStyles}
`

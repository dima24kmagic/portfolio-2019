import styled, { FlattenSimpleInterpolation } from 'styled-components'
import React, { CSSProperties } from 'react'

export enum TypographyColors {
  Primary = '#fff',
  Secondary = 'rgba(136, 131, 154, 1)',
}
export enum TypographyWeight {
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
  styles?: FlattenSimpleInterpolation
}
export const Typography = ({
  children = '',
  tag = 'p',
  styles = [''],
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
    ${styles}
  `
  return <Tag>{children}</Tag>
}
export const HighlightWord = styled.span`
  color: rgba(183, 174, 214, 1);
`

interface IButtonProps {
  width?: string
  background?: string
  fontSize?: number
  fontWeight?: TypographyWeight
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
`

export interface IShadowLightProps {
  width: number
  height: number
  color: string
  blur: number
  spread?: number
  top: number
  left: number
  offsetX: number
  offsetY: number
  borderRadius?: number | string
}
export const ShadowLight = styled.div<IShadowLightProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: transparent;
  box-shadow: ${({ offsetX }) => offsetX}px ${({ offsetY }) => offsetY}px
    ${({ blur }) => blur}px ${({ spread = 0 }) => spread}px
    ${({ color }) => color};
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  border-radius: ${({ borderRadius = 0 }) =>
    // @ts-ignore
    // eslint-disable-next-line no-restricted-globals
    `${borderRadius}${isNaN(borderRadius) ? '' : 'px'}`};
`

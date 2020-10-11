import styled from 'styled-components'

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
  fontSize: number
  letterSpacing?: number
  weight?: TypographyWeight | number
  mB?: string
  width?: string
}
export const Typography = styled.div<ITypographyProps>`
  color: ${({ color = TypographyColors.Primary }) => color};
  margin-bottom: ${({ mB = '0px' }) => mB};
  letter-spacing: ${({ letterSpacing }) => letterSpacing}px;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ weight }) => weight};
  width: ${({ width = 'auto' }) => width};
`
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

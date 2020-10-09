import React from 'react'
import styled from 'styled-components'

export interface IHomeProps {}

const BG = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(#38405a, #03091c);
  position: relative;
`

interface IShadowLightProps {
  width: number
  height: number
  color: string
  blur: number
  spread?: number
  top: number
  left: number
  offsetX: number
  offsetY: number
  borderRadius?: number
}
const ShadowLight = styled.div<IShadowLightProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: transparent;
  box-shadow: ${({ offsetX }) => offsetX}px ${({ offsetY }) => offsetY}px
    ${({ blur }) => blur}px ${({ spread = 0 }) => spread}px
    ${({ color }) => color};
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  border-radius: ${({ borderRadius = 0 }) => borderRadius}px;
`

const TagsCloud = styled.span`
  font-size: 115px;
  color: rgba(255,255,255,0.003);
  font-weight: 900;
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Work Sans', sans-serif;
  letter-spacing: 5px;
`

/**
 * Home page
 */
function Home(props: IHomeProps) {
  const {} = props
  return (
    <BG>
      <ShadowLight
        offsetX={120}
        offsetY={350}
        blur={150}
        top={-550}
        left={-550}
        width={550}
        height={550}
        color={'rgba(105,66,219,0.15)'}
        spread={80}
        borderRadius={70}
      />
      <ShadowLight
        offsetX={80}
        offsetY={180}
        blur={150}
        top={-550}
        left={-150}
        width={550}
        height={550}
        color={'rgba(38,124,203,0.2)'}
        spread={30}
        borderRadius={60}
      />
      <TagsCloud>
        SOFTWARE ENGINEER FRONTEND DEVELOPER REACT JAVASCRIPT HTML SASS CSS
        ACCESSIBILITY EXPERIENCED NODEJS CODE REVIEW EPAM THOMSON REUTERS
      </TagsCloud>
    </BG>
  )
}

export default Home

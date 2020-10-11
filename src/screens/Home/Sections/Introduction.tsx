import React from 'react'
import {
  Button,
  HighlightWord,
  Typography,
  TypographyColors,
  TypographyWeight,
} from '../../../components/StyledComponents'
import styled from 'styled-components'
import heroImage from '../../../res/images/42C1AECA-94DF-40DC-AD92-C1CFE3A63419_1_105_c.jpeg'

export interface IIntorductionProps {}

const Root = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
`

const BG = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(#38405a, #03091c);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
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
  color: rgba(255, 255, 255, 0.003);
  font-weight: 900;
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  letter-spacing: 5px;
  z-index: 0;
`

const ProfilePic = styled.div`
  width: 650px;
  height: 650px;
  border-radius: 160px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 30px 42px rgba(0, 0, 0, 0.1),
    0px 101px 157px rgba(0, 0, 0, 0.28);
  background-image: url(${heroImage});
  background-size: cover;
  position: absolute;
  top: 115px;
  right: 270px;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 214px;
  padding-top: 240px;
  width: 100%;
`

const Curve = styled.div`
  background: #fff;
  position: absolute;
  bottom: -120px;
  border-radius: 100%;
  height: 150px;
  width: 110%;
  transform: translateX(-4.5%) scaleY(1.5);
`

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;
`

/**
 * Intro section
 */
function Introduction(props: IIntorductionProps) {
  const {} = props
  return (
    <Root>
      <TitleWrapper>
        <Typography
          fontSize={18}
          color={TypographyColors.Secondary}
          weight={TypographyWeight.Light}
          letterSpacing={2}
          mB="6px"
        >
          Hey, my name is Dzmitry, and I’m a
        </Typography>
        <Typography
          fontSize={72}
          color={TypographyColors.Primary}
          weight={TypographyWeight.Bold}
          style={{ zIndex: 2 }}
          mB="12px"
        >
          Frontend Developer
        </Typography>
        <Typography
          fontSize={24}
          color={TypographyColors.Secondary}
          weight={TypographyWeight.SemiBold}
          letterSpacing={3}
          width="510px"
          mB="58px"
        >
          Doing <HighlightWord>React</HighlightWord> development, testing,
          reviewing. <br />
          Also doing <HighlightWord>NodeJS</HighlightWord>.
        </Typography>
        <ButtonsWrapper>
          <Button width="218px">
            <Typography fontSize={20}>Download CV</Typography>
          </Button>
          <Typography
            weight={TypographyWeight.Light}
            color={TypographyColors.Secondary}
            fontSize={16}
            letterSpacing={2}
          >
            or
          </Typography>
          <Button width="218px" background="#4B65EB">
            <Typography weight={TypographyWeight.SemiBold} fontSize={24}>
              Contact Me
            </Typography>
          </Button>
        </ButtonsWrapper>
        <ProfilePic />
      </TitleWrapper>
      <Curve />
      <BG>
        <ShadowLight
          offsetX={120}
          offsetY={350}
          blur={150}
          top={-550}
          left={-550}
          width={550}
          height={550}
          color="rgba(105,66,219,0.15)"
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
          color="rgba(38,124,203,0.2)"
          spread={30}
          borderRadius={60}
        />
        <TagsCloud>
          SOFTWARE ENGINEER FRONTEND DEVELOPER REACT JAVASCRIPT HTML SASS CSS
          ACCESSIBILITY EXPERIENCED NODEJS CODE REVIEW EPAM THOMSON REUTERS
        </TagsCloud>
      </BG>
    </Root>
  )
}

export default Introduction

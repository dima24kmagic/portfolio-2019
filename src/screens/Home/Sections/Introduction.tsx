import React from 'react'
import styled, { css } from 'styled-components'
import {
  GradientTypography,
  HighlightWord,
  ICustomStyles,
  ShadowLight,
  Typography,
  TypographyColors,
  TypographyWeight,
} from '../../../components/StyledComponents'
import heroImage from '../../../res/images/myPic-min.jpeg'
import WithGlow from '../../../components/WithGlow/WithGlow'
import InitiativeButtons from './components/InitiativeButtons'
import { theme } from '../../../theme/theme'

export interface IIntorductionProps {
  onContactMeClick: () => void
  isModalOpen: boolean
}

const Root = styled.section`
  display: flex;
  justify-content: center;
  height: auto;
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;

  ${theme.breakpoints.xl} {
    padding-bottom: 180px;
  }
`

const BG = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(#38405a, #03091c);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`

const TagsCloud = styled(GradientTypography)`
  color: rgba(0, 57, 66, 0.1);
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

const TitleWrapper = styled.div`
  --profilePicSize-xxxl: 650px;
  --profilePicSize-xxl: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding-left: 10%;
  padding-top: 240px;
  width: auto;
  margin-left: calc(var(--profilePicSize-xxxl) * -1);
  z-index: 1;

  ${theme.breakpoints.xxl} {
    margin-left: calc(var(--profilePicSize-xxl) * -1);
  }

  ${theme.breakpoints.xl} {
    margin-left: 0;
    padding-left: 0;
    padding-top: 60px;
    align-items: center;
  }

  ${theme.breakpoints.xs} {
    width: 100%;
  }
`

const Initials = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ${theme.breakpoints.xl} {
    align-items: center;
  }
`

const ProfilePic = styled.img`
  width: var(--profilePicSize-xxxl);
  height: var(--profilePicSize-xxxl);
  border-radius: 160px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 30px 42px rgba(0, 0, 0, 0.1),
    0px 101px 157px rgba(0, 0, 0, 0.28);
  background-image: url(${heroImage});
  background-size: cover;
  position: relative;

  ${theme.breakpoints.xxl} {
    width: var(--profilePicSize-xxl);
    height: var(--profilePicSize-xxl);
    border-radius: 120px;
  }
  ${theme.breakpoints.xl} {
    border-radius: 100px;
  }
  ${theme.breakpoints.sm} {
    width: 100%;
    height: 90vw;
    border-radius: 30px;
  }
  ${theme.breakpoints.xs} {
    width: 100%;
    height: 300px;
    border-radius: 30px;
  }

  ${theme.breakpoints.xxs} {
    width: 100%;
    height: 250px;
    border-radius: 30px;
  }
`

const SideNote = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 3;
  padding: 0 0;
  min-height: 25%;

  border-bottom-right-radius: 160px;
  border-bottom-left-radius: 160px;

  ${theme.breakpoints.xxl} {
    border-bottom-right-radius: 120px;
    border-bottom-left-radius: 120px;
  }
  ${theme.breakpoints.xl} {
    border-bottom-right-radius: 100px;
    border-bottom-left-radius: 100px;
  }
  ${theme.breakpoints.sm} {
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  ${theme.breakpoints.xs} {
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 10px 0;
  }
  ${theme.breakpoints.xxs} {
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 10px 0;
  }
`

export const Curve = styled.div`
  background: #fff;
  border-radius: 100%;
  height: 80px;
  width: 110%;
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%) scaleY(1.5);
  z-index: 1;
  ${theme.breakpoints.md} {
    transform: translateX(-50%) scaleY(1);
    bottom: -38px;
    height: 90px;
  }

  ${({ customStyles }: { customStyles?: ICustomStyles }) => customStyles}
`

/**
 * Intro section
 */
function Introduction(props: IIntorductionProps) {
  const { onContactMeClick, isModalOpen } = props
  return (
    <Root>
      <TitleWrapper>
        <Initials>
          <Typography
            fontSize="18px"
            color={TypographyColors.Secondary}
            weight={TypographyWeight.Light}
            letterSpacing={2}
            mB="6px"
            customStyles={css`
              ${theme.breakpoints.xl} {
                text-align: center;
              }
              ${theme.breakpoints.xxs} {
                font-size: 14px;
              }
            `}
          >
            Hey, my name is Dzmitry, and I’m a
          </Typography>
          <Typography
            tag="h1"
            fontSize="72px"
            color={TypographyColors.Primary}
            weight={TypographyWeight.Bold}
            customStyles={css`
              z-index: 10;
              ${theme.breakpoints.xl} {
                text-align: center;
              }

              ${theme.breakpoints.xs} {
                font-size: 68px;
                line-height: 62px;
              }
              ${theme.breakpoints.xxs} {
                font-size: 48px;
                line-height: 44px;
              }
            `}
            mB="24px"
          >
            Frontend Developer
          </Typography>
          <WithGlow
            style={css`
              position: absolute;
              left: 650px;
              top: -100px;
              justify-content: center;
              display: flex;
              ${theme.breakpoints.xxs} {
                margin-bottom: 24px;
              }
              ${theme.breakpoints.xs} {
                margin-bottom: 24px;
              }
              ${theme.breakpoints.sm} {
                margin-bottom: 24px;
                width: 80%;
              }
              ${theme.breakpoints.md} {
              }
              ${theme.breakpoints.xl} {
                position: relative;
                top: 0;
                left: 0;
                margin-bottom: 14px;
              }
            `}
            shadows={[
              {
                offsetX: 0,
                offsetY: 0,
                blur: 150,
                top: '50%',
                left: '50%',
                width: '60%',
                height: '60%',
                color: '#1A4B78',
                spread: 40,
                borderRadius: '100%',
                customStyles: css`
                  transform: translate(-50%, -50%);
                `,
              },
            ]}
          >
            <>
              <SideNote>
                <Typography
                  fontSize="18px"
                  color={TypographyColors.Primary}
                  weight={TypographyWeight.Light}
                  textAlign="center"
                  customStyles={css`
                    font-family: -apple-system, BlinkMacSystemFont, avenir next,
                      avenir, helvetica neue, helvetica, ubuntu, sans-serif,
                      roboto, noto, segoe ui, arial;
                    font-weight: 100;
                    font-style: italic;
                    color: rgba(255, 255, 255, 0.65);
                    width: 80%;
                    margin: 0 auto;
                    line-height: 28px;
                    ${theme.breakpoints.sm} {
                      font-size: 16px;
                      line-height: 22px;
                    }
                    ${theme.breakpoints.xxs} {
                      font-size: 14px;
                      line-height: 20px;
                    }
                  `}
                >
                  Passionate developer. Love good design, clean code,
                  well-tested components. Looking for remote work opportunities
                  + interested in immigrating to Canada/USA.
                </Typography>
              </SideNote>
              <ProfilePic
                src={heroImage}
                alt="Dzmitry Baranau, Frontend developer"
              />
            </>
          </WithGlow>
        </Initials>
        <Typography
          fontSize="24px"
          color={TypographyColors.Secondary}
          weight={TypographyWeight.SemiBold}
          letterSpacing={3}
          width="510px"
          mB="58px"
          customStyles={css`
            z-index: 10;
            ${theme.breakpoints.xxs} {
              width: 100%;
              font-size: 20px;
            }
            ${theme.breakpoints.sm} {
              width: 100%;
            }
            ${theme.breakpoints.xl} {
              text-align: center;
            }
          `}
        >
          Doing <HighlightWord>React</HighlightWord> development, testing,
          reviewing. <br />
          Also doing <HighlightWord>NodeJS</HighlightWord>.
        </Typography>
        <InitiativeButtons
          isModalOpen={isModalOpen}
          onContactMeClick={onContactMeClick}
        />
      </TitleWrapper>
      <Curve />
      <BG>
        <ShadowLight
          offsetX={120}
          offsetY={350}
          blur={150}
          top="-550px"
          left="-550px"
          width="550px"
          height="550px"
          color="rgba(105,66,219,0.15)"
          spread={80}
          borderRadius={70}
        />
        <ShadowLight
          offsetX={80}
          offsetY={180}
          blur={150}
          top="-550px"
          left="-150px"
          width="550px"
          height="550px"
          color="rgba(38,124,203,0.2)"
          spread={30}
          borderRadius={60}
        />
        <TagsCloud
          fontSize="115px"
          weight={TypographyWeight.Black}
          customStyles={css`
            background: linear-gradient(
              rgba(56, 64, 90, 0.1),
              rgba(2, 7, 22, 0.1)
            );
            user-select: none !important;
          `}
        >
          SOFTWARE ENGINEER FRONTEND DEVELOPER REACT JAVASCRIPT HTML SASS CSS
          ACCESSIBILITY EXPERIENCED NODEJS CODE REVIEW EPAM THOMSON REUTERS
        </TagsCloud>
      </BG>
    </Root>
  )
}

export default Introduction

import React from 'react'
import styled, { css } from 'styled-components'
import {
  Button,
  HighlightWord,
  ICustomStyles,
  ShadowLight,
  Typography,
  TypographyColors,
  TypographyWeight,
} from '../../../components/StyledComponents'
import heroImage from '../../../res/images/myPic.jpeg'
import WithGlow from '../../../components/WithGlow/WithGlow'

export interface IIntorductionProps {}

const Root = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;

  ${({
    theme: {
      breakpoints: { xl },
    },
  }) => xl} {
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
  z-index: -1;
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

  ${({
    theme: {
      breakpoints: { xxl },
    },
  }) => xxl} {
    margin-left: calc(var(--profilePicSize-xxl) * -1);
  }

  ${({
    theme: {
      breakpoints: { xl },
    },
  }) => xl} {
    margin-left: 0;
    padding-left: 0;
    padding-top: 60px;
    align-items: center;
  }

  ${({
    theme: {
      breakpoints: { xs },
    },
  }) => xs} {
    width: 100%;
  }
`

const Initials = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ${({
    theme: {
      breakpoints: { xl },
    },
  }) => xl} {
    align-items: center;
  }
`

const ProfilePic = styled.div`
  width: var(--profilePicSize-xxxl);
  height: var(--profilePicSize-xxxl);
  border-radius: 160px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 30px 42px rgba(0, 0, 0, 0.1),
    0px 101px 157px rgba(0, 0, 0, 0.28);
  background-image: url(${heroImage});
  background-size: cover;
  position: relative;

  ${({
    theme: {
      breakpoints: { xxl },
    },
  }) => xxl} {
    width: var(--profilePicSize-xxl);
    height: var(--profilePicSize-xxl);
  }

  ${({
    theme: {
      breakpoints: { xl },
    },
  }) => xl} {
    border-radius: 100px;
    margin-bottom: 14px;
  }

  ${({
    theme: {
      breakpoints: { sm },
    },
  }) => sm} {
    width: 100%;
    height: 90vw;
    border-radius: 30px;
    margin-bottom: 24px;
  }
  ${({
    theme: {
      breakpoints: { xs },
    },
  }) => xs} {
    width: 100%;
    height: 300px;
    border-radius: 30px;
    margin-bottom: 24px;
  }
  ${({
    theme: {
      breakpoints: { xxs },
    },
  }) => xxs} {
    width: 100%;
    height: 250px;
    border-radius: 30px;
    margin-bottom: 24px;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 480px;

  ${({
    theme: {
      breakpoints: { md },
    },
  }) => md} {
    width: 80%;
    flex-direction: column;
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

  ${({
    theme: {
      breakpoints: { md },
    },
  }) => md} {
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
  const {} = props
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
              ${({
                theme: {
                  breakpoints: { xl },
                },
              }) => xl} {
                text-align: center;
              }
              ${({
                theme: {
                  breakpoints: { xxs },
                },
              }) => xxs} {
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
              ${({
                theme: {
                  breakpoints: { xl },
                },
              }) => xl} {
                text-align: center;
              }
              ${({
                theme: {
                  breakpoints: { xs },
                },
              }) => xs} {
                font-size: 68px;
                line-height: 62px;
              }
              ${({
                theme: {
                  breakpoints: { xxs },
                },
              }) => xxs} {
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
              ${({
                theme: {
                  breakpoints: { xl },
                },
              }) => xl} {
                position: relative;
                top: 0;
                left: 0;
              }
              ${({
                theme: {
                  breakpoints: { md },
                },
              }) => md} {
                width: 80%;
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
            <ProfilePic />
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

            ${({
              theme: {
                breakpoints: { xl },
              },
            }) => xl} {
              text-align: center;
            }

            ${({
              theme: {
                breakpoints: { sm },
              },
            }) => sm} {
              width: 100%;
            }
            ${({
              theme: {
                breakpoints: { xxs },
              },
            }) => xxs} {
              width: 100%;
              font-size: 20px;
            }
          `}
        >
          Doing <HighlightWord>React</HighlightWord> development, testing,
          reviewing. <br />
          Also doing <HighlightWord>NodeJS</HighlightWord>.
        </Typography>
        <ButtonsWrapper>
          <a
            // eslint-disable-next-line global-require
            href={require('../../../res/PDF Portfolio.pdf')}
            download="FrontendDev_Dzmitry_Baranau_Portfolio"
          >
            <Button
              tabIndex={-1}
              width="218px"
              customStyle={css`
                ${({
                  theme: {
                    breakpoints: { md },
                  },
                }) => md} {
                  width: 100%;
                  background: #0b0b0b;
                }
              `}
            >
              <Typography
                customStyles={css`
                  z-index: 10;
                `}
                fontSize="20px"
              >
                Download CV
              </Typography>
            </Button>
          </a>
          <Typography
            customStyles={css`
              z-index: 10;
              ${({
                theme: {
                  breakpoints: { md },
                },
              }) => md} {
                margin-bottom: 8px;
                margin-top: 8px;
              }
            `}
            weight={TypographyWeight.Light}
            color={TypographyColors.Secondary}
            fontSize="16px"
            letterSpacing={2}
          >
            or
          </Typography>
          <Button
            width="218px"
            background="#4B65EB"
            bgHover="#5670f3"
            customStyle={css`
              ${({
                theme: {
                  breakpoints: { md },
                },
              }) => md} {
                width: 100%;
              }
            `}
          >
            <Typography
              customStyles={css`
                z-index: 10;
              `}
              weight={TypographyWeight.SemiBold}
              fontSize="24px"
            >
              Contact Me
            </Typography>
          </Button>
        </ButtonsWrapper>
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
        <TagsCloud>
          SOFTWARE ENGINEER FRONTEND DEVELOPER REACT JAVASCRIPT HTML SASS CSS
          ACCESSIBILITY EXPERIENCED NODEJS CODE REVIEW EPAM THOMSON REUTERS
        </TagsCloud>
      </BG>
    </Root>
  )
}

export default Introduction

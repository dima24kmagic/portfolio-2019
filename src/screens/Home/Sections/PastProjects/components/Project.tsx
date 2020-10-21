import React from 'react'
import styled, { css } from 'styled-components'
import {
  Typography,
  TypographyColors,
  TypographyWeight,
} from '../../../../../components/StyledComponents'
import WithGlow from '../../../../../components/WithGlow/WithGlow'

export interface IProjectProps {
  name: string
  description: string
  images: { href: string; alt: string }[]
  link: { label: string; href: string }
  shadowColor?: string
}

const Root = styled.div`
  --imagePreviewWidth: 620px;
  --imagePreviewHeight: 380px;

  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: calc(var(--imagePreviewWidth) + 96px);
  margin-bottom: 220px;

  ${({
    theme: {
      breakpoints: { xl },
    },
  }) => xl} {
    --imagePreviewWidth: 520px;
    --imagePreviewHeight: 320px;
    margin-left: calc(var(--imagePreviewWidth) + 96px);
  }
`

const ProjectLink = styled.a`
  color: #7ab7ff;
`

const ImagesWrapper = styled.div`
  --imagesWrapperMarginRight: 60px;
  position: absolute;
  left: calc((var(--imagePreviewWidth) + var(--imagesWrapperMarginRight)) * -1);
  top: -90px;

  width: var(--imagePreviewWidth);
  height: var(--imagePreviewHeight);

  ${({
    theme: {
      breakpoints: { xl },
    },
  }) => xl} {
    --imagesWrapperMarginRight: 40px;
  }
`

interface IImgStyleProps {
  imgOffsetX: string
  imgOffsetY: string
  imgIndex: number
}
const ProjectImage = styled.img<IImgStyleProps>`
  --imageOffsetX: 28px;

  background: ${({ src }) => (src === '' ? '#4a769d' : 'transparent')};
  border-radius: 24px;
  width: 100%;
  height: 100%;
  object-fit: cover;

  box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(0, 0, 0, 0.2);

  position: absolute;
  top: ${({ imgOffsetY }) => imgOffsetY};
  left: calc((var(--imageOffsetX) * -1) * ${({ imgIndex }) => imgIndex});

  opacity: ${({ imgIndex }) => (imgIndex === 1 ? 1 : 0.2)};
`

/**
 * Project info
 */
function Project(props: IProjectProps) {
  const { name, description, images, link, shadowColor } = props
  return (
    <Root>
      <Typography
        color={TypographyColors.Primary}
        fontSize="32px"
        mB="4px"
        weight={TypographyWeight.Bold}
      >
        {name}
      </Typography>

      <ProjectLink href={link.href} target="_blank">
        <Typography mB="22px" fontSize="16px" weight={TypographyWeight.Light}>
          {link.label}
        </Typography>
      </ProjectLink>
      <WithGlow
        shadows={[
          {
            offsetX: 0,
            offsetY: 0,
            blur: 120,
            top: '118px',
            left: '0px',
            width: '570px',
            height: '280px',
            color: shadowColor,
            spread: 5,
            borderRadius: '80px',
            customStyles: css`
              --shadowOffset: 75px;

              transform: translate(-50%, -10%);
              width: calc(var(--imagePreviewWidth) - 50px);
              left: calc(
                ((var(--imagePreviewWidth) / 2) * -1) - var(--shadowOffset)
              );
              height: calc(var(--imagePreviewHeight) - 50px);
              top: 50%;

              ${({
                theme: {
                  breakpoints: { xl },
                },
              }) => xl} {
                --shadowOffset: 60px;
              }
            `,
          },
        ]}
      >
        <ImagesWrapper>
          {images.map(({ alt, href }, i) => (
            <ProjectImage
              imgIndex={i}
              imgOffsetX={`${i * 95}px`}
              imgOffsetY={`${i * 28}px`}
              key={href}
              alt={alt}
              src={href}
            />
          ))}
        </ImagesWrapper>
      </WithGlow>
      <Typography
        fontSize="20px"
        color="#88839A"
        width="380px"
        weight={TypographyWeight.Regular}
      >
        {description}
      </Typography>
    </Root>
  )
}

export default Project

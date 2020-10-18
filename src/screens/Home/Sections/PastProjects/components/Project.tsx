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
  margin-left: calc(var(--imagePreviewWidth) + 90px);
  margin-bottom: 220px;
`

const ProjectLink = styled.a`
  color: #7ab7ff;
`

const ImagesWrapper = styled.div`
  position: absolute;
  left: calc((var(--imagePreviewWidth)) * -1);
  top: -90px;

  width: var(--imagePreviewWidth);
  height: var(--imagePreviewHeight);
`

interface IImgStyleProps {
  imgOffsetX: string
  imgOffsetY: string
  imgIndex: number
}
const ProjectImage = styled.img<IImgStyleProps>`
  background: ${({ src }) => (src === '' ? '#4a769d' : 'transparent')};
  border-radius: 24px;
  width: 100%;
  height: 100%;
  object-fit: cover;

  box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(0, 0, 0, 0.2);

  position: absolute;
  top: ${({ imgOffsetX }) => imgOffsetX};
  left: calc(
    (${({ imgOffsetY }) => (imgOffsetY === '0px' ? '60px' : imgOffsetY)}) * -1
  );

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
            left: 'calc(-100% - 25px)',
            width: '570px',
            height: '280px',
            color: shadowColor,
            spread: 5,
            borderRadius: '80px',
            customStyles: css`
              transform: translate(-50%, -50%);
            `,
          },
        ]}
      >
        <ImagesWrapper>
          {images.map(({ alt, href }, i) => (
            <ProjectImage
              imgIndex={i}
              imgOffsetX={`${i * 28}px`}
              imgOffsetY={`${i * 95}px`}
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

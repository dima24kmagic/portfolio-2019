import React from 'react'
import styled from 'styled-components'
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

const ImagesWrapper = styled.div``

interface IImgStyleProps {
  imgOffsetX: string
  imgOffsetY: string
  imgIndex: number
}
const ProjectImage = styled.img<IImgStyleProps>`
  background: #4a769d;
  border-radius: 16px;
  width: var(--imagePreviewWidth);
  height: var(--imagePreviewHeight);

  box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.1), 0px 0px 1px #000000,
    0px 20px 40px rgba(0, 0, 0, 0.2);

  position: absolute;
  top: ${({ imgOffsetX }) => imgOffsetX};
  left: calc(
    (
        var(--imagePreviewWidth) +
          ${({ imgOffsetY }) => (imgOffsetY === '0px' ? '60px' : imgOffsetY)}
      ) * -1
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

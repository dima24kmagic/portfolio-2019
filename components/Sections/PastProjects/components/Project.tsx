import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  Typography,
  TypographyColors,
  TypographyWeight,
} from "../../../StyledComponents";
import WithGlow from "../../../WithGlow/WithGlow";
import { theme } from "../../../../theme/theme";

export interface IProjectProps {
  name: string;
  description: string;
  images: { href: string; alt: string }[];
  link: { label: string; href: string };
  shadowColor?: string;
}

const Root = styled.div`
  --imagePreviewWidth: 620px;
  --imagePreviewHeight: 380px;

  min-height: 299px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: calc(var(--imagePreviewWidth) + 96px);
  margin-bottom: 220px;

  ${theme.breakpoints.xl} {
    --imagePreviewWidth: 520px;
    --imagePreviewHeight: 320px;
    margin-left: calc(var(--imagePreviewWidth) + 96px);
  }
  ${theme.breakpoints.l} {
    align-items: center;

    position: relative;
    top: 0;
    left: 0;
    margin-left: 0;
    margin-bottom: 140px;
  }
  ${theme.breakpoints.sm} {
    --imagePreviewWidth: 420px;
    --imagePreviewHeight: 260px;
    margin-bottom: 80px;
  }
  ${theme.breakpoints.sm} {
    --imagePreviewWidth: 340px;
    --imagePreviewHeight: 220px;
  }

  ${theme.breakpoints.xs} {
    width: 100%;
    --imagePreviewWidth: 280px;
    --imagePreviewHeight: 200px;
  }
  ${theme.breakpoints.xxs} {
    width: 100%;
    --imagePreviewWidth: 260px;
    --imagePreviewHeight: 180px;
  }
`;

const ProjectLink = styled.a`
  color: #7ab7ff;
`;

const ImagesWrapper = styled.div`
  --imagesWrapperMarginRight: 60px;
  position: absolute;
  left: calc((var(--imagePreviewWidth) + var(--imagesWrapperMarginRight)) * -1);
  top: -90px;

  width: var(--imagePreviewWidth);
  height: var(--imagePreviewHeight);

  ${theme.breakpoints.xl} {
    --imagesWrapperMarginRight: 40px;
  }
  ${theme.breakpoints.l} {
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 48px;
    margin-top: 20px;
  }
  ${theme.breakpoints.xxs} {
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 28px;
    margin-top: 20px;
  }
`;

interface IImgStyleProps {
  imgIndex: number;
  imgIndexSelected: number;
}
const ProjectImage = styled.img<IImgStyleProps>`
  --imageOffsetX: 28px;
  --imageOffsetY: 28px;

  background: ${({ src }) => (src === "" ? "#4a769d" : "transparent")};
  border-radius: 24px;
  width: 100%;
  height: 100%;
  object-fit: cover;

  box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(0, 0, 0, 0.2);

  position: absolute;
  top: calc(${({ imgIndex }) => imgIndex} * var(--imageOffsetY));
  left: calc((var(--imageOffsetX) * -1) * ${({ imgIndex }) => imgIndex});
  cursor: pointer;

  opacity: ${({ imgIndex, imgIndexSelected }) =>
    imgIndex === imgIndexSelected ? 0.2 : 1};
  z-index: ${({ imgIndex, imgIndexSelected }) =>
    imgIndex === imgIndexSelected ? 1 : 2};

  transition: opacity 0.15s ease-in;

  ${theme.breakpoints.xxs} {
    --imageOffsetX: 14px;
    --imageOffsetY: 14px;
  }
`;

/**
 * Project info
 */
function Project(props: IProjectProps) {
  const { name, description, images, link, shadowColor } = props;

  const [imgIndexSelected, setImgIndexSelected] = useState(1);
  const handleImgIndexSelected = (imgIndex) => () => {
    setImgIndexSelected(imgIndex);
  };
  return (
    <Root>
      <Typography
        color={TypographyColors.Primary}
        fontSize="32px"
        mB="4px"
        weight={TypographyWeight.Bold}
        customStyles={css`
          text-align: left;
          ${theme.breakpoints.xs} {
            text-align: center;
          }
        `}
      >
        {name}
      </Typography>
      <WithGlow
        zIndex={0}
        style={css``}
        shadows={[
          {
            offsetX: 0,
            offsetY: 0,
            blur: 120,
            top: "100px",
            left: "0px",
            width: "570px",
            height: "280px",
            color: shadowColor,
            spread: 5,
            borderRadius: "80px",
            customStyles: css`
              --shadowOffset: 75px;

              background: rgb(14 24 52);
              transform: translate(-50%, -18%);
              width: calc(var(--imagePreviewWidth) - 50px);
              left: calc(
                ((var(--imagePreviewWidth) / 2) * -1) - var(--shadowOffset)
              );
              height: calc(var(--imagePreviewHeight) - 50px);
              top: 45%;

              ${theme.breakpoints.xl} {
                --shadowOffset: 60px;
              }
              ${theme.breakpoints.l} {
                top: 25%;
                left: 47%;
              }
            `,
          },
        ]}
      >
        <ImagesWrapper>
          {images.map(({ alt, href }, i) => (
            <ProjectImage
              onClick={handleImgIndexSelected(i)}
              imgIndex={i}
              imgIndexSelected={imgIndexSelected}
              key={href}
              alt={alt}
              src={href}
            />
          ))}
        </ImagesWrapper>
      </WithGlow>
      <ProjectLink href={link.href} target="_blank">
        <Typography mB="22px" fontSize="16px" weight={TypographyWeight.Light}>
          {link.label}
        </Typography>
      </ProjectLink>

      <Typography
        fontSize="20px"
        color="#88839A"
        width="380px"
        weight={TypographyWeight.Regular}
        customStyles={css`
          ${theme.breakpoints.l} {
            text-align: center;
            width: var(--imagePreviewWidth);
            padding: 0 10px;
          }
          ${theme.breakpoints.sm} {
            text-align: center;
            width: 80%;
            //padding: 0 10px;
          }
          ${theme.breakpoints.xs} {
            text-align: center;
            width: 100%;
            padding: 0 10px;
          }
        `}
      >
        {description}
      </Typography>
    </Root>
  );
}

export default Project;

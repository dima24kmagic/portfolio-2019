import styled from 'styled-components'
import mePortraitImg from '../../images/Me Portrait.jpg'
import meLandscapeImg from '../../images/Me Landscape.jpg'

export const PreviewContent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  
  padding: 64px 15px 0 15px;
  background-image: url("${mePortraitImg}");
  @media (min-width: 375px) {
    padding: 64px 32px 0 32px;
  }
  @media (min-width: 480px) {
   background-image: url("${meLandscapeImg}");
    padding: 64px 32px 0 32px;
  }
  @media (min-width: 900px) {
    padding: 80px 80px 0 80px;
  }
  @media (min-width: 1280px) {
    padding: 128px 128px 0 128px;
  }
`

export const NavigateMoreButton = styled('div')`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({
    theme: {
      color: { secondary },
    },
  }) => secondary};
  &:hover {
    color: ${({
      theme: {
        color: { secondaryHover },
      },
    }) => secondaryHover};
  }
  cursor: pointer;
  transition: color ${({ theme: { transitionSpeed } }) => transitionSpeed};
`

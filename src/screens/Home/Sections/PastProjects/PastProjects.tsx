import React from 'react'
import styled, { css } from 'styled-components'
import { Curve } from '../Introduction'
import {
  Typography,
  TypographyWeight,
} from '../../../../components/StyledComponents'
import Project, { IProjectProps } from './components/Project'
import linearGradientBg from '../../../../res/images/BG2-min.png'
import ricexPic1 from '../../../../res/images/riceex1-min.jpg'
import ricexPic2 from '../../../../res/images/ricex2-min.png'
import roundRushPic1 from '../../../../res/images/roundrush_board-1-min.png'
import roundRushPic2 from '../../../../res/images/roundrush_leaderboard-min.png'
import TRPic1 from '../../../../res/images/TR1-min.png'
import TRPic2 from '../../../../res/images/TR2-min.png'
import newsroomPic1 from '../../../../res/images/newsroom-min.png'
import newsroomPic2 from '../../../../res/images/newsroom-2-min.png'
import connectors1 from '../../../../res/images/connectors-min.png'
import connectors2 from '../../../../res/images/connectors-2-min.png'
import { theme } from '../../../../theme/theme'

export interface IPastProjectsProps {}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${linearGradientBg});
  background-size: cover;
  width: 100%;
  padding: 130px 0;
  position: relative;
  overflow: hidden;

  ${theme.breakpoints.xl} {
    padding: 130px 0 0px;
  }
`

const projects: IProjectProps[] = [
  {
    name: 'Depop newsroom',
    link: { href: 'https://news.depop.com/', label: 'news.depop.com' },
    images: [
      { href: newsroomPic2, alt: 'Newsroom about page' },
      { href: newsroomPic1, alt: 'Newsroom main page' },
    ],
    description:
      'Newsroom is a platform for a Depop to place they most recent news and share actual company info with they users. Powered with React and Gatsby for Server Side Rendering to achieve fast load and good SEO',
    shadowColor: '#D16499',
  },
  {
    name: 'Depop affiliate programme',
    link: { href: 'https://connectors.depop.com/', label: 'conectors.depop.com' },
    images: [
      { href: connectors2, alt: 'Connectors goodbye section' },
      { href: connectors1, alt: 'Connectors main section' },
    ],
    description:
      'Affiliate programme for Depop. Powered with Gatsby, React and SSR',
    shadowColor: '#D16499',
  },
  {
    name: 'Round Rush',
    link: { href: 'https://app.roundrush.com/', label: 'app.roundrush.com' },
    images: [
      { href: roundRushPic2, alt: 'Round rush leader board' },
      { href: roundRushPic1, alt: 'Round rush project board' },
    ],
    description:
      'Roudrush is the software developed for professionals that work with agile methodology. Rather than other similar software, it is very easy to setup and user-friendly. The workflow is smooth and help you to manage your teams work in order to deliver every project with the best efficiency and quality',
    shadowColor: '#D16499',
  },
  {
    name: 'Rice exchange',
    link: { href: 'https://www.ricex.io/', label: 'ricex.io' },
    images: [
      { href: ricexPic2, alt: 'rice exchange proposals board' },
      { href: ricexPic1, alt: 'rice exchange website login' },
    ],
    description:
      'The Rice Exchange platform allows buyers to search for rice producers that have been awarded verifiable sustainable certifications giving buyers the certainty that they are purchasing sustainably produced rice. In turn this allows sustainable producers to charge a premium for their product.',
    shadowColor: '#4C81D1',
  },
  {
    name: 'TR Tax Store',
    link: {
      href: 'https://store.tax.thomsonreuters.com/accounting/',
      label: 'development is ongoing',
    },
    images: [
      { href: TRPic2, alt: 'Round rush leader board' },
      { href: TRPic1, alt: 'Round rush project board' },
    ],
    description:
      'Online Store used by Thomson Reuters to sell tax, audit, accounting and finance products, trusted by professionals around the world',
    shadowColor: '#ce4f0c',
  },
]

/**
 * Past projects info
 */
function PastProjects(props: IPastProjectsProps) {
  const {} = props
  return (
    <Root>
      <Curve
        customStyles={css`
          top: -60px;
        `}
      />
      <Typography
        customStyles={css`
          display: inline-block;
          background: linear-gradient(-90deg, #f15077, #e8a364);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: red;
          ${theme.breakpoints.l} {
            margin-bottom: 52px;
          }
          ${theme.breakpoints.sm} {
            margin-bottom: 32px;
          }
          ${theme.breakpoints.xs} {
            font-size: 44px;
            margin-bottom: 22px;
          }
          ${theme.breakpoints.xxs} {
            font-size: 40px;
          }
        `}
        weight={TypographyWeight.Black}
        fontSize="62px"
        tag="h2"
        textAlign="center"
        width="fit-content"
        mB="82px"
      >
        Past Projects
      </Typography>
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </Root>
  )
}

export default PastProjects

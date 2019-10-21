import React from 'react'
import styled from 'styled-components'
import { PlainText } from '../../../screens/Home/HomeContent/styles'

interface Props {
  descriptions: string[]
}

const Description = styled('div')`
  position: relative;
  margin-bottom: 8px;
`

const BulletPoint = styled('div')`
  position: absolute;
  top: 8px;
  left: -16px;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: ${({ theme }) => theme.color.accent2};
`

/**
 * Description of a skill
 */
function SkillDescription(props: Props) {
  const { descriptions } = props

  return (
    <>
      {descriptions.map(description => (
        <Description key={description}>
          <BulletPoint />
          <PlainText style={{ fontSize: 16, fontWeight: 400 }}>
            {description}
          </PlainText>
        </Description>
      ))}
    </>
  )
}

export default SkillDescription

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { animated, useTransition } from 'react-spring'
import { PlainText } from '../../../screens/screenStyles'
import { easeCubicInOut } from 'd3-ease'

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
  const DURATION = 300
  const { descriptions } = props
  const [descriptionState, setDescriptions] = useState(descriptions)
  useEffect(() => {
    setDescriptions([])
    setTimeout(() => {
      setDescriptions(descriptions)
    }, DURATION + 100)
  }, [descriptions])

  // @ts-ignore
  const transition = useTransition(
    descriptionState,
    description => description,
    {
      from: {
        transform: 'translate3d(-8px, 0, 0)',
        opacity: 0,
      },
      enter: {
        transform: 'translate3d(0px, 0, 0)',
        opacity: 1,
      },
      leave: {
        transform: 'translate3d(8px, 0, 0)',
        opacity: 0,
      },
      config: { duration: DURATION, easing: easeCubicInOut },
    },
  )

  return (
    <div>
      {transition.map(({ key, props, item }) => {
        return (
          <animated.div key={key} style={props}>
            <Description>
              <BulletPoint />
              <PlainText style={{ fontSize: 16, fontWeight: 400 }}>
                {item}
              </PlainText>
            </Description>
          </animated.div>
        )
      })}
    </div>
  )
}

export default SkillDescription

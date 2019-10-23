import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { animated, useTransition } from 'react-spring'
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

const Container = styled(animated.div)`
  position: absolute;
  top: 72px;
  left: 72px;
  width: 100%;
`

/**
 * Description of a skill
 */
function SkillDescription(props: Props) {
  const ANIMATION_TRAIL = 100
  const DURATION = 300
  const { descriptions } = props
  const [descriptionState, setDescriptions] = useState(descriptions)
  useEffect(() => {
    const descriptionLength = descriptionState.length
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
      // trail: ANIMATION_TRAIL,
      reset: true,
      from: {
        transform: 'translate3d(-8px, 0, 0)',
        opacity: 0,
      },
      enter: {
        transform: 'translate3d(0px, 0, 0)',
        opacity: 1,
      },
      leave: item => async next => {
        // TODO: get top value from refMap
        await next({ transform: 'translate3d(8px, 0, 0)', opacity: 0 })
        await next({ position: 'absolute', top: 0 })
      },
      config: (item, state) =>
        state === 'leave' ? [{ duration: DURATION }, { duration: 0 }] : {},
    },
  )

  return (
    <>
      {transition.map(({ key, props, item }, index) => {
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
    </>
  )
}

export default SkillDescription

import React from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

interface Props {
  name: string
  isSelected: boolean
}

const Wrapper = styled(animated.div)`
  display: inline-flex;
  position: relative;
  padding: 0 12px;
  font-size: 36px;
  font-weight: 300;
  margin-right: 32px;
  cursor: pointer;
  color: ${({ theme }) => theme.color.primary};
  transition: color 0.15s;
`

const Underline = styled(animated.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: ${({ theme }) => theme.color.primary};
`

/**
 * Skill
 */
function Skill(props: Props) {
  const { name, isSelected } = props
  const underlineSpring = useSpring({
    transform: isSelected ? 'translate3d(100%, 0, 0)' : 'translate3d(0, 0, 0)',
  })
  return (
    <Wrapper>
      {name}
      <Underline style={underlineSpring} />
    </Wrapper>
  )
}

export default Skill

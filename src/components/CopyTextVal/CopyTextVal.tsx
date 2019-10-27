import React, { useRef } from 'react'
import styled from 'styled-components'
import Underline from '../Underline'
import { animated } from 'react-spring'
import useCopyAnimation from './hooks/useCopyAnimation'
import { text } from '@storybook/addon-knobs'

interface Props {
  children: string
  topMargin?: number
  value: string
  type: string
}

const InputCopyValueWrapper = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
`
const InputCopyValue = styled('textarea')`
  background: ${({ theme }) => theme.bg.primary};
  border: none;
  outline: none;
`

const ClickToCopy = styled('div')`
  display: flex;
  position: relative;
  color: ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.bg.primary};
  transition: color ${({ theme }) => theme.transitionSpeed},
    background ${({ theme }) => theme.transitionSpeed};
  overflow: hidden;
  padding: 4px 16px 4px;
`

const NegotiateDiv = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.primary};
  transition: background ${({ theme }) => theme.transitionSpeed};
  z-index: 2;
  transform: translate3d(-100%, 0, 0);
`

const CopiedMessage = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  color: ${({ theme }) => theme.bg.primary};
  transition: color ${({ theme }) => theme.transitionSpeed};
  z-index: 3;
`

const Root = styled('div')`
  position: relative;
  cursor: pointer;

  margin-top: 0;
  @media (min-width: 650px) {
    margin-top: -12px;
  }
`

/**
 * Click to copy
 */
function CopyTextVal(props: Props) {
  const { children, topMargin = 0, value, type } = props
  const {
    invertSpring,
    handleCopyAnimation,
    successMessageSpring,
  } = useCopyAnimation()

  const inputWrapperRef = useRef<HTMLDivElement>()
  const handleCopy = () => {
    const textarea = document.createElement('textarea')
    textarea.style.border = 'none'
    textarea.style.outline = 'none'
    textarea.value = value
    inputWrapperRef.current.appendChild(textarea)
    textarea.focus()
    textarea.select()
    document.execCommand('copy')
    inputWrapperRef.current.removeChild(textarea)
  }
  const handleOnClick = () => {
    handleCopyAnimation(handleCopy)
  }

  return (
    <Root onClick={handleOnClick}>
      <ClickToCopy marginTop={topMargin}>
        <NegotiateDiv style={invertSpring} />
        {children}{' '}
        <InputCopyValueWrapper ref={inputWrapperRef}>
          <InputCopyValue tabIndex={-1} value={value} />
        </InputCopyValueWrapper>
      </ClickToCopy>
      <CopiedMessage style={successMessageSpring}>Copied!</CopiedMessage>
    </Root>
  )
}

export default CopyTextVal

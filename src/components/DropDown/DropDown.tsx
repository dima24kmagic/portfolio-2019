import React, { MouseEvent, ReactElement, useEffect } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'

interface Props {
  isOpen: boolean
  children: ReactElement
  onClickAway?: (e: MouseEvent) => void
  clickAwayType?: string
}

const Root = styled(animated.div)`
  min-width: 300px;
  position: absolute;
  left: 50%;
  top: calc(100% + 24px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 48px;
  border-radius: 8px;
  box-shadow: 0 10px 20px ${({ theme }) => theme.dropdown.shadow};
  z-index: 1000;
  background: ${({ theme }) => theme.dropdown.bg};

  transition: background ${({ theme }) => theme.transitionSpeed},
    box-shadow ${({ theme }) => theme.transitionSpeed};
`

/**
 * Animated dropdown
 */
function DropDown(props: Props) {
  const {
    isOpen,
    children,
    onClickAway = () => {},
    clickAwayType = 'click',
  } = props
  const modalTransition = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      transform: 'translate3d(-50%, -8px, 0)',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(-50%, 0, 0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(-50%, 8px, 0)',
    },
  })

  useEffect(() => {
    if (isOpen) {
      // @ts-ignore
      document.addEventListener(clickAwayType, onClickAway)
    }
    return () => {
      // @ts-ignore
      return document.removeEventListener(clickAwayType, onClickAway)
    }
  }, [isOpen])
  return (
    <>
      {modalTransition.map(
        ({ props: modalSpring, item, key }) =>
          item && (
            <Root style={modalSpring} key={key}>
              {children}
            </Root>
          ),
      )}
    </>
  )
}

export default DropDown

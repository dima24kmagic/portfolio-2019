import { useRef } from 'react'
import { useChain, useSpring, useTransition } from 'react-spring'
import { easeExpInOut } from 'd3-ease'

const useSideNavAnimation = (isOpen: boolean, menuOptions: any[]) => {
  const wrapperRef = useRef()
  const wrapperStyleProps = useSpring({
    ref: wrapperRef,
    from: { transform: 'translate3d(100%, 0px, 0px)' },
    to: {
      transform: isOpen
        ? 'translate3d(0%, 0px, 0px)'
        : 'translate3d(100%, 0px, 0px)',
    },
    config: {
      easing: easeExpInOut,
      duration: isOpen ? 1400 : 800,
    },
  })
  const bgRef = useRef()
  const bgBlurTransforms = useTransition(isOpen, null, {
    ref: bgRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const meuOptionsRef = useRef()
  const menuOptionTransitions = useTransition(
    isOpen ? menuOptions : [],
    option => option.text,
    {
      ref: meuOptionsRef,
      from: {
        opacity: 0,
        transform: 'translate3d(20px, 0px ,0px)',
        height: 0
      },
      enter: {
        opacity: 1,
        transform: 'translate3d(0px, 0px ,0px)',
        height: 0
      },
      leave: {
        opacity: 0,
        transform: 'translate3d(20px, 0px ,0px)',
        height: 0
      },
      trail: isOpen ? 100 : 120,
    },
  )

  useChain(
    isOpen
      ? [bgRef, wrapperRef, meuOptionsRef]
      : [meuOptionsRef, wrapperRef, bgRef],
    isOpen ? [0, 0, 0.7] : [0, 0.6, 0.6],
  )
  return {
    wrapperStyleProps,
    menuOptionTransitions,
    bgBlurTransforms,
  }
}

export default useSideNavAnimation

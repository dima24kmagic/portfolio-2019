import { useState } from 'react'
import { useSpring } from 'react-spring'
import { easeExpInOut } from 'd3-ease'

const useCopyAnimation = () => {
  const [wasClicked, setWasClicked] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const successMessageSpring = useSpring({
    from: {
      opacity: 0,
      transform: 'translate(0%, 0px)',
    },
    transform: isCopied ? 'translate(-50%, 3px)' : 'translate(-50%, -11px)',
    opacity: isCopied ? 1 : 0,
    onRest: () => {},
  })
  const invertSpring = useSpring({
    transform: wasClicked ? 'translate3d(0, 0, 0)' : 'translate3d(-101%, 0, 0)',
    config: {
      duration: 650,
      easing: easeExpInOut,
    },
  })

  const handleCopy = (cb: () => void) => {
    setWasClicked(true)
    setTimeout(() => {
      setIsCopied(true)
    }, 300)
    setTimeout(() => {
      setWasClicked(false)
    }, 1100)
    setTimeout(() => {
      setIsCopied(false)
    }, 1100)
    cb()
  }

  return {
    handleCopyAnimation: handleCopy,
    invertSpring,
    successMessageSpring,
  }
}

export default useCopyAnimation

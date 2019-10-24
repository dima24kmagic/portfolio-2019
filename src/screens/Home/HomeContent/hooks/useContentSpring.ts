import { useSpring } from 'react-spring'
import { easeExpOut } from 'd3-ease'

const useContentSpring = (isInView: boolean) => {
  const contentSpring = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0px, 64px, 0px)',
    },
    to: {
      opacity: isInView ? 1 : 0,
      transform: isInView
        ? 'translate3d(0px, 0px, 0px)'
        : 'translate3d(0px, 64px, 0px)',
    },
    config: {
      duration: 1300,
      easing: easeExpOut,
    },
  })

  return contentSpring
}

export default useContentSpring

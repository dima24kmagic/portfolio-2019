import {useSpring} from "react-spring";
import {easeExpOut} from "d3-ease";

const useContentSpring = () => {
  const contentSpring = useSpring({
    delay: 1450,
    from: {
      opacity: 0,
      transform: 'translate3d(0px, -8px, 0px)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0px, 0px, 0px)',
    },
    config: {
      duration: 1300,
      easing: easeExpOut,
    },
  })

  return contentSpring
}

export default useContentSpring
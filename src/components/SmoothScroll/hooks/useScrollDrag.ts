import { MutableRefObject } from 'react'

const useScrollDrag = (
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
  handleOnScrollDrag: (number) => void,
  handleScrollMouseDown: () => void,
  handleScrollMouseUp: () => void,
) => {
  let dragStartY = 0
  const handleMouseMove = (e: MouseEvent) => {
    const deltaY = dragStartY - e.clientY
    handleOnScrollDrag(
      deltaY * (scrollWrapperRef.current.clientHeight / window.innerHeight),
    )
  }
  const handleMouseUp = () => {
    handleScrollMouseUp()
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseMove)
  }
  const handleMouseDown = (e: MouseEvent) => {
    dragStartY = e.clientY
    handleScrollMouseDown()
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return handleMouseDown
}

export default useScrollDrag

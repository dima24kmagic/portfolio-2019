import { MutableRefObject } from 'react'

const useScrollDrag = (
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
  handleOnScrollDrag: (number) => void,
) => {
  let dragStartY = 0
  const handleMouseMove = (e: MouseEvent) => {
    const deltaY = dragStartY - e.clientY
    handleOnScrollDrag(
      deltaY * (scrollWrapperRef.current.clientHeight /window.innerHeight ),
    )
  }
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseMove)
  }
  const handleMouseDown = (e: MouseEvent) => {
    dragStartY = e.clientY
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return handleMouseDown
}

export default useScrollDrag

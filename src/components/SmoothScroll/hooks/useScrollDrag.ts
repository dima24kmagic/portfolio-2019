import { MutableRefObject } from 'react'

const useScrollDrag = (
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
  scrollBarRef: MutableRefObject<HTMLDivElement>,
  handleOnScrollDrag: (number) => void,
) => {
  let dragStartY = 0
  const handleMouseMove = (e: MouseEvent) => {
    const deltaY = dragStartY - e.clientY
    handleOnScrollDrag(
      deltaY * (scrollWrapperRef.current.clientHeight / window.innerHeight),
    )
  }
  const handleMouseUp = () => {
    scrollBarRef.current.style.opacity = '0.4'
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseMove)
  }
  const handleMouseDown = (e: MouseEvent) => {
    dragStartY = e.clientY
    scrollBarRef.current.style.opacity = '0.8'
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return handleMouseDown
}

export default useScrollDrag

import { MutableRefObject } from 'react'

const useScrollDrag = (
  scrollWrapperRef: MutableRefObject<HTMLDivElement>,
  scrollBarRef: MutableRefObject<HTMLDivElement>,
  onScrollDrag: (number) => void,
  onScrollbarMouseUp: () => void,
) => {
  let dragStartY = 0
  const handleMouseMove = (e: MouseEvent) => {
    const deltaY = dragStartY - e.clientY + 1
    const valueToPass =
      deltaY * (scrollWrapperRef.current.clientHeight / window.innerHeight)
    console.log({
      valueToPass,
      clientHeight: scrollWrapperRef.current.clientHeight,
      clientDrag: e.clientY,
      windowHeight: window.innerHeight,
    })
    onScrollDrag(
      deltaY * (scrollWrapperRef.current.clientHeight / window.innerHeight),
    )
  }
  const handleMouseUp = () => {
    scrollBarRef.current.style.opacity = '0.4'
    onScrollbarMouseUp()
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseMove)
  }
  const handleMouseDown = (e: MouseEvent) => {
    dragStartY = e.clientY + 1
    scrollBarRef.current.style.opacity = '0.8'
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return handleMouseDown
}

export default useScrollDrag

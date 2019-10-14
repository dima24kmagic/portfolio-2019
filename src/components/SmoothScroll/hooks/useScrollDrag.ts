import { MutableRefObject, useEffect } from 'react'

const useScrollDrag = (
  ref: MutableRefObject<HTMLDivElement>,
  handleOnScrollDrag: (number) => void,
) => {
  let dragStartY = 0
  const handleMouseMove = (e: MouseEvent) => {
    const deltaY = dragStartY - e.clientY
    handleOnScrollDrag(deltaY)
  }
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseMove)
  }
  const handleMouseDown = (e: MouseEvent) => {
    console.log('MOUSEDOWN!')
    dragStartY = e.clientY
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  if (ref.current) {
    ref.current.addEventListener('mousedown', handleMouseDown)
  }
}

export default useScrollDrag

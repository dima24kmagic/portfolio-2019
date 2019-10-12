import React from 'react'
import { NavigateMoreButton, PreviewContent } from '../PreviewContent'
import AnimatedName from '../../AnimatedName'

interface Props {}

/**
 * Home preview content (img + text)
 */
function HomePreview(props: Props) {
  const {} = props
  return (
    <PreviewContent>
      <AnimatedName />
      <NavigateMoreButton>Read More</NavigateMoreButton>
    </PreviewContent>
  )
}

export default HomePreview

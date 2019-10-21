import React from 'react'
import { storiesOf } from '@storybook/react'
import Skill from './Skill'
import ProvideStoriesTheme from '../../storybook/ProvideStoriesTheme'

storiesOf('Components|Skill', module).add('Skill example', () => {
  return (
    <ProvideStoriesTheme>
      <Skill isSelected name="React JS" />
    </ProvideStoriesTheme>
  )
})

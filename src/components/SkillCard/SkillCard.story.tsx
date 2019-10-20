import React from 'react'
import { storiesOf } from '@storybook/react'
import SkillCard from './SkillCard'
import ProvideStoriesTheme from '../../storybook/ProvideStoriesTheme'

storiesOf('Components|SkillCard', module).add('SkillCard example', () => {
  return (
    <ProvideStoriesTheme>
      <SkillCard skill={{ name: 'Test', description: '', img: '' }} />
    </ProvideStoriesTheme>
  )
})

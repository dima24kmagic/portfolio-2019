import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import Skill from './Skill'
import ProvideStoriesTheme from '../../storybook/ProvideStoriesTheme'

storiesOf('Components|Skill', module)
  .addDecorator(withKnobs)
  .add('Skill example', () => {
    return (
      <ProvideStoriesTheme>
        <Skill isSelected={boolean('isSelected', false)} name="React JS" />
      </ProvideStoriesTheme>
    )
  })

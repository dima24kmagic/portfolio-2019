import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import Skill from './Skill'
import ProvideStoriesTheme from '../../storybook/ProvideStoriesTheme'
import { SkillTypeExample } from '../../types/SkillType'

storiesOf('Components|SkillType', module)
  .addDecorator(withKnobs)
  .add('SkillType example', () => {
    return (
      <ProvideStoriesTheme>
        <Skill index={1} skill={SkillTypeExample} />
      </ProvideStoriesTheme>
    )
  })

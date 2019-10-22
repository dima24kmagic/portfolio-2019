import React from 'react'
import { storiesOf } from '@storybook/react'
import SkillCard from './SkillCard'
import ProvideStoriesTheme from '../../storybook/ProvideStoriesTheme'
import { SkillTypeExample } from '../../types/SkillType'

storiesOf('Components|SkillCard', module).add('SkillCard example', () => {
  return (
    <ProvideStoriesTheme>
      <div>
        <SkillCard skill={SkillTypeExample} />
        <SkillCard
          skill={{
            name: 'JavaScript',
            description: [''],
            img: 'https://png.pngtree.com/svg/20170719/javascript_633988.png',
          }}
        />
      </div>
    </ProvideStoriesTheme>
  )
})

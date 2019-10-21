interface Skill {
  name: string
  img: string
  description: string
  subSkills?: Skill[]
}

export const SkillTypeExample: Skill = {
  name: 'React JS',
  description:
    'Creating components (typescript), State Management, Performance tracking, API integration, hooks, styling',
  img:
    'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
}
export default Skill

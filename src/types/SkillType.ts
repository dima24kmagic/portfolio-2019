interface SkillType {
  name: string
  img: string
  description: string[]
  subSkills?: SkillType[]
}

export const SkillTypeExample: SkillType = {
  name: 'React JS',
  description: [
    'Creating components (typescript)',
    'State Management',
    'Performance tracking',
    'API integration',
    'hooks',
    'styling',
  ],
  img:
    'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
}
export default SkillType

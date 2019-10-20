interface Skill {
  name: string
  img: string
  description: string
  subSkills?: Skill[]
}

export default Skill

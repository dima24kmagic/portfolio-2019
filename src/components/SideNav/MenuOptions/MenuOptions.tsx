import React from 'react'
import { MenuOption, MenuOptionWrapper } from './styles'

interface Props {
  menuOptionTransitions: any[]
  onToggleNav: () => void
}

/**
 * MenuOptions
 */
function MenuOptions(props) {
  const { menuOptionTransitions, onToggleNav } = props
  return menuOptionTransitions.map(({ item, key, props }) => {
    return (
      <MenuOptionWrapper style={props} key={key}>
        <MenuOption exact to={item.to} onClick={onToggleNav}>
          {item.text}
        </MenuOption>
      </MenuOptionWrapper>
    )
  })
}

export default MenuOptions

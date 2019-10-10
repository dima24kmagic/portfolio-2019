import React from 'react'
import { withTheme } from 'styled-components'
import MenuOptions from './MenuOptions/MenuOptions'
import useSideNavAnimation from './hooks/useSideNavAnimation'
import { BackdropFilter, ChangeTheme, HamburgerStyled, Wrapper } from './styles'
import { MenuLink } from '../../types/MenuLink'
import { useToggleTheme } from '../../theme/theme'

interface Props {
  isOpen: boolean
  onToggleNav: () => void
  menuOptions: MenuLink[]
}

/**
 * Side Navigation
 */
function SideNav({ isOpen, onToggleNav, menuOptions }: Props) {
  const {
    bgBlurTransforms,
    menuOptionTransitions,
    wrapperStyleProps,
    changeThemeStyles,
  } = useSideNavAnimation(isOpen, menuOptions)
  const toggleTheme = useToggleTheme()
  return (
    <>
      <HamburgerStyled isActive={isOpen} toggleButton={onToggleNav} />
      {bgBlurTransforms.map(
        ({ item, key, props }) =>
          item && (
            <BackdropFilter key={key} onClick={onToggleNav} style={props} />
          ),
      )}
      <Wrapper style={wrapperStyleProps}>
        <MenuOptions
          onToggleNav={onToggleNav}
          menuOptionTransitions={menuOptionTransitions}
        />
        <ChangeTheme style={changeThemeStyles} onClick={toggleTheme}>
          Change Theme
        </ChangeTheme>
      </Wrapper>
    </>
  )
}

export default withTheme(SideNav)

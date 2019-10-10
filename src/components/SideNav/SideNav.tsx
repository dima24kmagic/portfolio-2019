import React from 'react'
import MenuOptions from './MenuOptions/MenuOptions'
import useSideNavAnimation from './hooks/useSideNavAnimation'
import { BackdropFilter, HamburgerStyled, Wrapper } from './styles'
import { MenuLink } from '../../types/MenuLink'
import { withTheme } from 'styled-components'

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
  } = useSideNavAnimation(isOpen, menuOptions)
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
      </Wrapper>
    </>
  )
}

export default withTheme(SideNav)

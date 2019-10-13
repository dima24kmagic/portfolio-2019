import React from 'react'
import { withTheme } from 'styled-components'
import MenuOptions from './MenuOptions/MenuOptions'
import useSideNavAnimation from './hooks/useSideNavAnimation'
import { BackdropFilter, HamburgerStyled, Wrapper } from './styles'
import { MenuLink } from '../../types/MenuLink'
import { useSideNavContext } from './SideNavContext'

interface Props {
  isOpen: boolean
  onToggleNav: () => void
  menuOptions: MenuLink[]
}

/**
 * Side Navigation
 */
function SideNav({ menuOptions }: Props) {
  const { isOpen, handleToggle } = useSideNavContext()
  const {
    bgBlurTransforms,
    menuOptionTransitions,
    wrapperStyleProps,
  } = useSideNavAnimation(isOpen, menuOptions)
  return (
    <>
      <HamburgerStyled isActive={isOpen} toggleButton={handleToggle} />
      {bgBlurTransforms.map(
        ({ item, key, props }) =>
          item && (
            <BackdropFilter key={key} onClick={handleToggle} style={props} />
          ),
      )}
      <Wrapper style={wrapperStyleProps}>
        <MenuOptions
          handleNavToggle={handleToggle}
          menuOptionTransitions={menuOptionTransitions}
        />
      </Wrapper>
    </>
  )
}

export default withTheme(SideNav)

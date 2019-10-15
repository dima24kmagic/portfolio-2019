import React from 'react'
import { ThemeProvider } from 'styled-components'
import MenuOptions from './MenuOptions/MenuOptions'
import useSideNavAnimation from './hooks/useSideNavAnimation'
import { BackdropFilter, HamburgerStyled, Wrapper } from './styles'
import { MenuLink } from '../../types/MenuLink'
import { useSideNavContext } from './SideNavContext'
import { useTheme } from '../../theme/theme'

interface Props {
  menuOptions: MenuLink[]
}

/**
 * Side Navigation
 */
function SideNav({ menuOptions }: Props) {
  const { isOpen, handleToggle } = useSideNavContext()
  const theme = useTheme()
  const {
    bgBlurTransforms,
    menuOptionTransitions,
    wrapperStyleProps,
  } = useSideNavAnimation(isOpen, menuOptions)
  return (
    <ThemeProvider theme={theme}>
      <HamburgerStyled isActive={isOpen} toggleButton={handleToggle} />
      {bgBlurTransforms.map(
        ({ item, key, props }) =>
          item && (
            <BackdropFilter key={key} onClick={handleToggle} style={props} />
          ),
      )}
      <Wrapper style={wrapperStyleProps}>
        <MenuOptions
          onToggleNav={handleToggle}
          menuOptionTransitions={menuOptionTransitions}
        />
      </Wrapper>
    </ThemeProvider>
  )
}

export default SideNav

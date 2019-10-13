import React, { ReactNode, useContext, useState } from 'react'

const SideNavContext = React.createContext({
  isOpen: false,
  handleToggle: () => {},
})

export const useSideNavContext = () => {
  const { isOpen, handleToggle } = useContext(SideNavContext)
  return { isOpen, handleToggle }
}

export const SideNavContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [isNavOpen, setNavOpen] = useState(false)
  const handleNavToggle = () => {
    setNavOpen(!isNavOpen)
  }

  return (
    <SideNavContext.Provider
      value={{ isOpen: isNavOpen, handleToggle: handleNavToggle }}
    >
      {children}
    </SideNavContext.Provider>
  )
}

import React, { useContext } from 'react'
import { ThemeModeContext } from './ThemeModeContextProvider'

const useTheme = () => {
  const { mode } = useContext(ThemeModeContext)
  return {}
}

export default useTheme

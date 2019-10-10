import { useEffect } from 'react'
import { useToggleTheme } from '../theme/theme'

const useThemeBasedOnTime = () => {
  const toggleTheme = useToggleTheme()
  useEffect(() => {
    const currHours = new Date().getHours()
    if (currHours > 19 || currHours < 6) {
      toggleTheme()
    }
  }, [])
}

export default useThemeBasedOnTime

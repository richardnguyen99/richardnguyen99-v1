/**
 * Create a context provider that can be swapped
 * theme via a custom React Hook `useLocalStorage`
 */
import React from 'react'
import { ThemeProvider as Root, DefaultTheme } from 'styled-components'

import { ThemeMode } from '../types'
import useLocalStorage from '../hooks/useLocalStorage'

interface ThemeProps {
  // Use prop-types like ThemeProvider component provides
  children: React.ReactChild
}

export const ThemeContext = React.createContext({
  theme: 'light',
  toggle: (_: ThemeMode) => {}
})

const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<ThemeMode>('theme', 'light')

  const themeObj: DefaultTheme = {
    mode: theme
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle: setTheme
      }}
    >
      <Root theme={themeObj}>{children}</Root>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

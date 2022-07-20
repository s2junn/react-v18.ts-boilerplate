import { useCallback, useEffect, useState } from 'react'

enum Theme {
  light = 'light',
  dark = 'dark',
}

type ThemeShapes = Theme.light | Theme.dark | null

const KEY_THEME = 'app_theme'

const useTheme = (): [typeof theme, typeof setTheme] => {
  const getInitialTheme = useCallback(() => {
    let theme = window.localStorage.getItem(KEY_THEME) as ThemeShapes
    const INVALID_THEME = theme !== Theme.light && theme !== Theme.dark
    console.log('useTheme :: getInitialTheme :: theme = ', theme)
    console.log('useTheme :: getInitialTheme :: INVALID_THEME = ', INVALID_THEME)

    if (!theme || INVALID_THEME) {
      const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
      console.log('useTheme :: getInitialTheme :: matches = ', matches)
      theme = matches ? Theme.dark : Theme.light
    }

    console.log('useTheme :: getInitialTheme :: theme = ', theme)
    return theme
  }, [])

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    console.log('useTheme :: useEffect :: theme = ', theme)
    window.localStorage.setItem(KEY_THEME, theme)
  }, [theme])

  return [theme, setTheme]
}

export default useTheme

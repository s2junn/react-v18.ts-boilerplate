import { atom, selector } from 'recoil'

const enum Theme {
  auto = 'auto',
  light = 'light',
  dark = 'dark',
}

export type ThemeShapes = Theme.auto | Theme.light | Theme.dark

const KEY_THEME = 'app_theme'

export const getTheme = (): ThemeShapes => {
  let theme = localStorage.getItem(KEY_THEME) as ThemeShapes
  const INVALID_THEME = !Theme.hasOwnProperty(theme)

  if (theme === undefined || INVALID_THEME) {
    theme = Theme.auto
  }

  return theme
}

export const themeState = atom<ThemeShapes>({
  key: 'themeState',
  default: getTheme(),
})

export const themeValue = selector<ThemeShapes>({
  key: 'themeValue',
  get: ({ get }) => {
    let theme = get(themeState)

    if (theme === Theme.auto) {
      const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
      if (matches) {
        theme = Theme.dark
      } else {
        theme = Theme.light
      }
    }

    return theme
  },
  set: ({ set }, value) => {
    localStorage.setItem(KEY_THEME, String(value).trim())
    set(themeState, value)
  },
})

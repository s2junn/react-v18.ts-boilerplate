export interface ITheme {
  colors: {
    'background': string
    'font-color': string
  }
}

/**
 * @light theme
 */
export const light: ITheme = {
  colors: {
    // 'background': '#FFFFFF',
    'background': 'blue',
    'font-color': '#222222',
  },
}

/**
 * @dark theme
 */
export const dark: ITheme = {
  colors: {
    // 'background': '#222222',
    'background': 'red',
    'font-color': '#EEEEEE',
  },
}

interface IThemeGroup {
  auto: ITheme
  light: ITheme
  dark: ITheme
}

const Themes: IThemeGroup = {
  auto: {
    colors: {
      'background': '',
      'font-color': '',
    },
  },
  light,
  dark,
}

export default Themes

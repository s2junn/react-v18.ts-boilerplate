import * as React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'
import { RecoilRoot, useRecoilValue } from 'recoil'

import GlobalStyles from '@/assets/styles/base'
import Themes from '@/assets/styles/themes'
// import { themeValue } from '@/modules/theme'
// const theme = Themes[useRecoilValue(themeValue)]

export const decorators = [
  withRouter,
  (Story) => {
    return (
      <RecoilRoot>
        {/* <GlobalStyles theme={Themes[theme]} /> */}
        <GlobalStyles theme={Themes.light} />
        <Story />
      </RecoilRoot>
    )
  },
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  reactRouter: {
    routePath: '/',
  },
}

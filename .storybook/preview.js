import * as React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import GlobalStyles from '@/assets/styles/global'
import { default as Theme } from '@/assets/styles/themes'

export const decorators = [
  withRouter,
  (Story) => {
    return (
      <>
        <GlobalStyles theme={Theme.light} />
        <Story />
      </>
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

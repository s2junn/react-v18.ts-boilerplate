import * as React from 'react'
import { withRouter } from 'storybook-addon-react-router-v6'

import GlobalStyles from '@/assets/styles/global'

export const decorators = [
  withRouter,
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
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

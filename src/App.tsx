import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { ThemeProvider } from '@emotion/react'

import Meta from '@/components/meta'
import GlobalStyles from '@/assets/styles/base'
import Router from '@/routes/index'

import Themes from '@/assets/styles/themes'
import { themeValue } from '@/modules/theme'

function App(): React.ReactElement {
  const theme = Themes[useRecoilValue(themeValue)]

  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <GlobalStyles theme={theme} />
      <Router />
    </ThemeProvider>
  )
}

export default App

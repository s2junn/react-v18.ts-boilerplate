import * as React from 'react'
import { useState, useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@emotion/react'

import Meta from '@/components/meta'
import Router from '@/routes/index'
import GlobalStyles from '@/assets/styles/base'
import useTheme from '@/utils/themes'
import Themes from '@/assets/styles/themes'

function App(): React.ReactElement {
  const [theme, setTheme] = useState(useTheme()[0])

  return (
    <ThemeProvider theme={Themes[theme]}>
      <Meta />
      <GlobalStyles theme={Themes[theme]} />
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default App

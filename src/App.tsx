import * as React from 'react'
import { useState, useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@emotion/react'

import Meta from '@/components/meta'
import BSLRouter from '@/routes/index'
import GlobalStyles from '@/assets/styles/global'
import useTheme from '@/utils/themes'
import { default as Theme } from '@/assets/styles/themes'

const App = () => {
  const [theme, setTheme] = useState(useTheme()[0])

  return (
    <ThemeProvider theme={Theme[theme]}>
      <Meta />
      <GlobalStyles theme={Theme[theme]} />
      <RecoilRoot>
        <BSLRouter />
      </RecoilRoot>
    </ThemeProvider>
  )
}
export default App

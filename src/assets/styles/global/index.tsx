import * as React from 'react'
import { Global, css } from '@emotion/react'

import { Theme } from '@/assets/styles/themes'
import ResetStyles from '@/assets/styles/global/reset'

interface GlobalStylesProps {
  theme: Theme
}

function GlobalStyles(props: GlobalStylesProps) {
  const { theme } = props

  return (
    <>
      <ResetStyles />
      <Global
        styles={css`
          html {
            background-color: ${theme.bgColor};
            color: ${theme.fontColor};
          }
        `}
      />
    </>
  )
}

export default GlobalStyles

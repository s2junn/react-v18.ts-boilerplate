import * as React from 'react'
import { Global, css } from '@emotion/react'

import { Theme } from '@/assets/styles/themes'
import ResetStyles from '@/assets/styles/base/reset'
import Variables from '@/assets/styles/base/variables'
import Colors from '@/assets/styles/base/colors'
import Fonts from '@/assets/styles/base/fonts'
import Mixins from '@/assets/styles/base/mixins'

interface GlobalStylesProps {
  theme: Theme
}

function GlobalStyles(props: GlobalStylesProps): React.ReactElement {
  const { theme } = props

  return (
    <>
      <ResetStyles />
      <Variables />
      <Colors />
      <Fonts />
      <Mixins />
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

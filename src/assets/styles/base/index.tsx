import * as React from 'react'
import { Global, css } from '@emotion/react'

import ResetStyles from '@/assets/styles/base/reset'
import Variables from '@/assets/styles/base/variables'
import Colors from '@/assets/styles/base/colors'
import Fonts from '@/assets/styles/base/fonts'
import Mixins from '@/assets/styles/base/mixins'
import { ITheme } from '@/assets/styles/themes'

interface GlobalStylesProps {
  theme: ITheme
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
            background-color: ${theme.colors.background};
            color: ${theme.colors['font-color']};
          }
        `}
      />
    </>
  )
}

export default GlobalStyles

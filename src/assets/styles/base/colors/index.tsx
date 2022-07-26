import * as React from 'react'
import { Global, css } from '@emotion/react'

function Colors(): React.ReactElement {
  return (
    <Global
      styles={css`
        $white: #ffffff;
        $black: #000000;
      `}
    />
  )
}

export default Colors

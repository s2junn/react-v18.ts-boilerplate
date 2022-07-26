import * as React from 'react'
import { Global, css } from '@emotion/react'

function Variables(): React.ReactElement {
  return (
    <Global
      styles={css`
        /* Safe-area for IOS */
        $safe-area-top-env: env(safe-area-inset-top);
        $safe-area-top-const: constant(safe-area-inset-top);
        $safe-area-bottom-env: env(safe-area-inset-bottom);
        $safe-area-bottom-const: constant(safe-area-inset-bottom);
      `}
    />
  )
}

export default Variables

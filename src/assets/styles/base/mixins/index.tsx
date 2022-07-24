import * as React from 'react'
import { Global, css } from '@emotion/react'

function Mixins(): React.ReactElement {
  return (
    <Global
      styles={css`
        /* ellipsis (for display: block | inline-block) */
        @mixin ellipsis {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* ellipsis for 2 line */
        @mixin ellipsis2 {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        @mixin clearfix {
          &:after {
            content: '';
            display: table;
            clear: both;
          }
        }

        @mixin text-break-all {
          white-space: normal;
          word-break: break-all;
          word-wrap: break-word;
          line-height: 22px;
        }

        @mixin transition-hover {
          transition: all 0.2s ease-in-out;
        }
      `}
    />
  )
}

export default Mixins

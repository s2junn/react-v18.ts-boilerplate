import '@emotion/react'
import { ITheme } from '@/assets/styles/themes'

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

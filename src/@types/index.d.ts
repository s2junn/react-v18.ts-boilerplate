type User = {
  name: string
}

declare module '@emotion/react' {
  export interface Theme {
    bgColor: string
    fontColor: string
  }
}

export type { User }

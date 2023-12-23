import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      'gray-700': string
      'gray-600': string
      'gray-500': string
      'gray-400': string
      'gray-300': string
      'gray-200': string
      'gray-100': string

      white: string

      'blue-dark': string
      blue: string
      'purple-dark': string
      purple: string

      red: string
      yellow: string
    }
  }
}

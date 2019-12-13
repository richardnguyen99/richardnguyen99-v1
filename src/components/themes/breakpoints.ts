import { DefaultTheme } from 'styled-components'


export type Breakpoints = {
  [k: string]: number
}

export const breakpoints: Breakpoints = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 376
}

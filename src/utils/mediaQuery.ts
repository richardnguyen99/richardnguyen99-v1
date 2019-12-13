import {
  css,
  SimpleInterpolation,
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components'

import { breakpoints } from '../components/themes/breakpoints'

export const media = Object.keys(breakpoints).reduce(
  (
    accumulator: {
      [key: string]: (
        styles: CSSObject | TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
      ) => FlattenSimpleInterpolation
    },
    label: string
  ) => {
    const size = breakpoints[label]

    Object.assign(accumulator, {
      [label]: (
        styles: CSSObject | TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
      ) => css`
        @media (min-width: ${size}px) {
          ${css(styles, ...interpolations)}
        }
      `
    })

    return accumulator
  },
  {}
)

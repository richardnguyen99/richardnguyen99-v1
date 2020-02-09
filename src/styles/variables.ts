import { css } from 'styled-components'

export const TextColor = css`
  /* Normal text usage */
  --Theme-Body__Text: ${(props): string =>
    props.theme.mode === 'dark' ? '#d7dadc' : '#222222'};
  --Theme-Body__Text-tint10: ${(props): string =>
    props.theme.mode === 'dark' ? '#c2c4c6' : '#383838'};
  --Theme-Body__Text-tint20: ${(props): string =>
    props.theme.mode === 'dark' ? '#acaeb0' : '#4e4e4e'};
`

export const FontFace = css`
  --Theme-Body__Font--monospace: 'SF Mono';
`

export const Transitions = css`
  --Theme-Transition--easing: cubic-bezier(0.645, 0.045, 0.355, 1);
`

import { css } from 'styled-components'

export const TextColor = css`
  /* Normal text usage */
  --Theme-Body__text: ${(props): string =>
    props.theme.mode === 'dark' ? '#d7dadc' : '#222222'};
  --Theme-Body__text--tint10: ${(props): string =>
    props.theme.mode === 'dark' ? '#c2c4c6' : '#383838'};
  --Theme-Body__text--tint20: ${(props): string =>
    props.theme.mode === 'dark' ? '#acaeb0' : '#4e4e4e'};
`

export const FontFace = css`
  --Theme-Body__Font--monospace: 'SF Mono', Menlo, Monaco, monospace;
`

export const Transitions = css`
  --Theme-Transition--easing: cubic-bezier(0.645, 0.045, 0.355, 1);
`

export const GlobalStyle = css`
  --Theme-Body__postLine: ${(props): string =>
    props.theme.mode === 'dark' ? '1px solid #343536' : 'none'};
  --Theme-Heading__postLine: ${(props): string =>
    props.theme.mode === 'light' ? '#dae0e6' : '#343536'};
  --Theme-Body__background: ${(props): string =>
    props.theme.mode === 'light' ? '#ffffff' : '#1a1a1b'};
  --Theme-Body__boxShadow: ${(props): string =>
    props.theme.mode === 'light'
      ? '0px 10px 30px rgba(57, 56, 61, 0.205)'
      : 'none'};
  --Theme-Code__text--inLine: ${(props): string =>
    props.theme.mode === 'light' ? '#222222' : '#d7dadc'};
  --Theme-Code__background--inLine: ${(props): string =>
    props.theme.mode === 'light' ? '#222222' : '#d7dadc'};
`

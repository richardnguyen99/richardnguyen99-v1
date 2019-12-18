import { createGlobalStyle } from 'styled-components'

/**
 * Global style works like normalize.css
 * to remove styles targeting irrelevant
 * browsers while applying new styles.
 */
const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
    outline: none;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;

    /* Create root variables to avoid styling with props */
    --Theme-Body--Background: ${(props): string =>
      props.theme.mode === 'light' ? '#dae0e6' : '#030303'};
    --Theme-Body--Text: ${(props): string =>
      props.theme.mode === 'light' ? '#222222' : '#d7dadc'};
    --Theme-Navbar--Background: ${(props): string =>
      props.theme.mode === 'light' ? '#ffffff' : '#030303'};
    --Theme-Border__onScroll: ${(props): string =>
      props.theme.mode === 'dark' ? '1px solid #343536' : 'none'};
    --Theme-BoxShadow__onScroll: ${(props): string =>
      props.theme.mode === 'light'
        ? '0px 10px 30px rgba(57, 56, 61, 0.205)'
        : 'none'};
    --Theme-NavLink--Color: ${(props): string =>
      props.theme.mode === 'light' ? '#222222' : '#d7dadc'};
    --Theme-NavLink--Color__onHover: ${(props): string =>
      props.theme.mode === 'light' ? '#1c1c1c' : '#d7dadc'};
    --Theme-NavLink--Background__onHover: ${(props): string =>
      props.theme.mode === 'light'
        ? 'rgba(26,26,27,0.1)'
        : 'rgba(215,218,220,0.1)'};
    --Theme-Section--Background: ${(props): string =>
      props.theme.mode === 'light' ? '#ffffff' : '#030303'};

    --Theme-Section--Background__gradient: linear-gradient(180deg, ${(
      props
    ): string =>
      props.theme.mode === 'light'
        ? '#ffffff'
        : '#1db954'} 0%, var(--Theme-Body--Background) 100%);
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Montserrat, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 400;
    background: var(--Theme-Body--Background);
    line-height: 1.5rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background 300ms ease;
    transition: color 300ms ease;
  }

  [tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;

  button {
    outline: none;

    &:focus {
      outline: none;
    }
  }

  h3 {
    margin: 0;
  }

}

`

export default GlobalStyle

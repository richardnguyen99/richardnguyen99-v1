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
    --Theme-Body--Background: ${props => props.theme.mode === 'light' ? '#dae0e6' : '#030303'};
    --Theme-Body--Text: ${props => props.theme.mode === 'light' ? '#222222' : '#d7dadc'};
    --Theme-Navbar--Background: ${props => props.theme.mode === 'light' ? '#ffffff' : '#1a1a1b'};
    --Theme-Navbar--Border__onScroll: ${props => props.theme.mode === 'dark' ? '#343536' : 'none'};
    --Theme-Navbar--BoxShadow__onScroll: ${props => props.theme.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'none'};
    --Theme-NavbarLink--Color: ${props => props.theme.mode === 'light' ? '#222222' : '#d7dadc'};
    --Theme-NavbarLink--Color__onHover: ${props => props.theme.mode === 'light' ? '#1c1c1c' : '#d7dadc'};

  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 400;
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

}

`

export default GlobalStyle

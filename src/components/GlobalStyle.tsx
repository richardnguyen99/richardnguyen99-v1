import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /**  Reboot CSS
   *
   * This is a normalizations of HTML elements, which is manually
   * forked from Normalize.css to remove styles targeting
   * irrelevant browsers while applying new styles.
   *
   * Normalize is licensed MIT.
   * More information: https://github.com/necolas/normalize.css
   *
   =============================================================*/
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap&subset=cyrillic,cyrillic-ext,latin-ext,vietnamese');

  /* Change to 'border-box' so that 'width' is not affected by 'padding' or 'border' */
  *,*::before,*::after {
    outline: none;
    box-sizing: border-box;
  }

  /* Root
   *
   * 1. Define the root's font-size value, which will affect the
   *    value of 'rem' (null by default). 1rem = 16px
   * 2. Define a set of variables that will be used by var() in
   *    other components. These variables will change values
   *    depending on 'props.mode'.
   *
   =============================================================*/
  :root {
    font-size: 16px; /* 1 */

    /* Create root variables to avoid styling with props */ /* 2 */
    --Theme-Body--Background: ${(props): string =>
      props.theme.mode === 'light' ? '#ffffff' : '#1a1a1b'};
    --Theme-Body--Text: ${(props): string =>
      props.theme.mode === 'light' ? '#222222' : '#d7dadc'};
    --Theme-Navbar--Background: ${(props): string =>
      props.theme.mode === 'light' ? '#ffffff' : '#1a1a1b'};
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
      props.theme.mode === 'light' ? '#ffffff' : '#1a1a1b'};
    --Theme-Section--Background__gradient: linear-gradient(180deg, var(--Theme-Navbar--Background) 35%, var(--Theme-Body--Background) 100%);
    --Theme-Section--Border: ${(props): string =>
      props.theme.mode === 'dark' ? '1px solid #343536' : '1px solid #ccc'};
    --Theme-Section--postLine: ${(props): string =>
      props.theme.mode === 'light' ? '#dae0e6' : '#343536'};
    --Theme-Section--BoxShadow: ${(props): string =>
      props.theme.mode === 'light'
        ? '0px 10px 30px rgba(57, 56, 61, 0.205)'
        : 'none'};
    --Theme-Card--Background: ${(props): string =>
      props.theme.mode === 'light' ? '#dae0e6' : '#101010'};
    --Theme-Card--Border: ${(props): string =>
      props.theme.mode === 'dark' ? '1px solid #343536' : '1px solid #ccc'};
    --Theme-Logo__filter: ${(props): string =>
      props.theme.mode === 'dark' ? 'brightness(1) invert(0.2)' : ''};
    --Theme-Code__inLine--Background: ${(props): string =>
      props.theme.mode === 'light' ? '#eeeeee' : '#222222'};
    --Theme-Code__inLine--Text: ${(props): string =>
      props.theme.mode === 'light' ? '#222222' : '#d7dadc'};
    --Theme-Blockquote--Border: ${(props): string =>
      props.theme.mode === 'light' ? '#222222' : '#d7dadc'};
    --Theme-Blockquote--Background: ${(props): string =>
      props.theme.mode === 'light' ? '#dae0e6' : '#030303'};
    --Theme-Link--Color: ${(props): string =>
      props.theme.mode === 'light' ? '#222222' : '#d7dadc'};
    --Theme-Link__MailTo--Color__gradient: linear-gradient(to right, #52c234, #061700);
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  /** Styles for Body element
   *
   * 1. Remove all the margins in all browsers.
   * 2. Apply to basic font families. This can be changed later
   * 3. Prevent adjustments of font size after orientation
   *    changes in IE on Windows Phone and in iOS.
   * 4. Change the default tap highlight to be completely
   *    transparent in iOS.
   *
   =============================================================*/
  body {
    margin: 0; /* 1 */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; /* 2 */
    font-weight: 200;
    background: var(--Theme-Body--Background);
    line-height: 1.5rem;
    transition: all 0.2s ease;
    -webkit-font-smoothing: antialiased;  /* 3 */
    -moz-osx-font-smoothing: grayscale;   /* 4 */
  }

  [tabindex="-1"]:focus:not(:focus-visible) {
    outline: 0 !important;
  }

  /** Content grouping's styles
   *
   * 1. Reset Firefox's gray color
   * 2. Set correct height and prevent the 'size' attribute to
   *    make the 'hr' like 'input' field.
   *
   =============================================================*/
  hr {
    margin: 0;
    color: var(--Theme-Section--postLine); /* 1 */
    border: 0;
    opacity: 0.25;

    &:not([size]) {
      height: 1px; /* 2 */
    }
  }

  /** Typography's styles
   *
   * 1. Remove top margins from headings. By default, <h1>--><h6>
   *    all receive top and bottom margins.
   =============================================================*/
  h1 {
    margin-top: 0; /* 1 */
    margin-bottom: 0.5rem; /* 1 */
    font-family: Montserrat, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
  }

  h2 {
    margin-top: 0; /* 2 */
    margin-bottom: 0.5rem; /* 1 */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
  }

  h3 {
    margin-top: 0; /* 1 */
    margin-bottom: 0.5rem; /* 1 */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
  }

  h4 {
    margin-top: 0; /* 1 */
    margin-bottom: 0.5rem; /* 1 */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
  }

  h5 {
    margin-top: 0; /* 1 */
    margin-bottom: 0.5rem; /* 1 */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
  }

  h6 {
    margin-top: 0; /* 1 */
    margin-bottom: 0.5rem; /* 1 */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
  }

  p {
    font-weight: 400;
    margin-top: 0.25;
    margin-bottom: 1rem;
  }

  /** Abrreviation's styles
   *
   * 1. Duplicate behavior to the data-*.
   * 2. Add the correct text decoration in Chrome, Edge, IE, etc.
   * 3. Add explicit cursor to indicate changed behavior.
   * 4. Prevent the text-decoration to be skipped.
   *
   =============================================================*/
  abbr[title],
  abbr[data-original-title] {   /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted;
    cursor: help; /* 3 */
    text-decoration-skip-ink: none; /* 4 */
  }

  /** Code's styles
   *
   * 1. Remove browser default top margin.
   * 2. Reset browser default of '1em' to use 'rem'.
   * 3. Don't allow content to break outside
   *
   =============================================================*/
  pre,
  code,
  kbd,
  samp {
    font-family: Monaco, Menlo, Consolas, monospace;
  }


  code {
    font-size: 0.875rem;
    color: var(--Theme-Code__inLine--Text);
    border-radius: 2px;
    background-color: var(--Theme-Code__inLine--Background);

    word-wrap: break-word;

    a > & {
      color: inherit;
    }
  }

  pre {
    display: block;
    margin-top: 0;  /* 1 */
    margin-bottom: 1rem;  /* 2 */
    overflow: auto; /* 3 */
    font-size: 0.875rem;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #fff;
    background-color: #222;

    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.55);

    code {
      font-size: inherit;
      color: inherit;
      word-break: wrap;
      background-color: inherit
    }
  }

  kbd {
    padding: 0.4rem 0.2rem;
    font-size: 0.875rem;
    color: var(--Theme-Body--Background);
    background-color: var(--Theme-Body--Text);
    border-radius: 0.2rem;

    kbd {
      padding: 0;
      font-size: 1em;
      font-weight: 700;
    }
  }

  button {
    outline: none;

    &:focus {
      outline: none;
    }
  }

  blockquote {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 1rem;
    margin-left: 0;
    padding-left: 2rem;
    border-left: 0.5rem solid var(--Theme-Blockquote--Border);
    background: var(--Theme-Blockquote--Background);
    font-size: 1rem;
    font-style: italic;

    > p {
      margin: 0;
      padding-top: 1rem;
      padding-right: 1rem;
      padding-bottom: 1rem;
    }
  }

  code[class*="language-"],
  pre[class*="language-"] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    color: #eee;
    background: #030303;
    font-family: Menlo, monospace;
    font-size: 1rem;
    line-height: 1.5rem;

    tab-size: 4;

    hyphens: none;
  }

  :not(pre) > code[class*="language-"] {
    white-space: normal;
    border-radius: 0.2rem;
    padding: 0.1rem;
  }

  pre[class*="language-"] {
    overflow: auto;
    position: relative;
    margin-bottom: 2rem;
    padding: 1.25rem 1rem;
  }

  code[class*="language-text"],
  pre[class*="language-text"] {
    color: var(--Theme-Code__inLine--Text);
    background-color: var(--Theme-Code__inLine--Background)
  }

  .language-css > code,
  .language-sass > code,
  .language-scss > code {
    color: #fd9170;
  }

  [class*="language-"] .namespace {
    opacity: 0.7;
  }

  .token.atrule {
    color: #c792ea;
  }

  .token.attr-name {
    color: #ffcb6b;
  }

  .token.attr-value {
    color: #a5e844;
  }

  .token.attribute {
    color: #a5e844;
  }

  .token.boolean {
    color: #c792ea;
  }

  .token.builtin {
    color: #ffcb6b;
  }

  .token.cdata {
    color: #80cbc4;
  }

  .token.char {
    color: #80cbc4;
  }

  .token.class {
    color: #ffcb6b;
  }

  .token.class-name {
    color: #f2ff00;
  }

  .token.comment {
    color: #616161;
  }

  .token.constant {
    color: #c792ea;
  }

  .token.deleted {
    color: #ff6666;
  }

  .token.doctype {
    color: #616161;
  }

  .token.entity {
    color: #ff6666;
  }

  .token.function {
    color: #c792ea;
  }

  .token.hexcode {
    color: #f2ff00;
  }

  .token.id {
    color: #c792ea;
    font-weight: bold;
  }

  .token.important {
    color: #c792ea;
    font-weight: bold;
  }

  .token.inserted {
    color: #80cbc4;
  }

  .token.keyword {
    color: #c792ea;
  }

  .token.number {
    color: #fd9170;
  }

  .token.operator {
    color: #89ddff;
  }

  .token.prolog {
    color: #616161;
  }

  .token.property {
    color: #80cbc4;
  }

  .token.pseudo-class {
    color: #a5e844;
  }

  .token.pseudo-element {
    color: #a5e844;
  }

  .token.punctuation {
    color: #89ddff;
  }

  .token.regex {
    color: #f2ff00;
  }

  .token.selector {
    color: #ff6666;
  }

  .token.string {
    color: #a5e844;
  }

  .token.symbol {
    color: #c792ea;
  }

  .token.tag {
    color: #ff6666;
  }

  .token.unit {
    color: #fd9170;
  }

  .token.url {
    color: #ff6666;
  }

  .token.variable {
    color: #ff6666;
  }
`

export default GlobalStyle

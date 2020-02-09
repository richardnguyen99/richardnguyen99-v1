import { css } from 'styled-components'

const TransitionStyles = css`
  .fade-up-enter {
    opacity: 0.01;
    transform: translateY(30px);
    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .fade-up-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`

export default TransitionStyles

import styled, { keyframes } from 'styled-components'

export interface NavLinkProps {
  color?: string
  disabled?: boolean
  button?: boolean

  [p: string]: any
}

const strikeIn = keyframes`
  0% {
    width: 0;
    left: 0;
    right: auto;
  }
  100% {
    left: 0;
    right: auto;
    width: 100%
  }
`

const strikeOut = keyframes`
  0% {
    width: 100%;
    left: auto;
    right: 0;
  }
  100% {
    width: 0;
    left: auto;
    right: 0
  }
`

const NavLink = styled.a<NavLinkProps>`
  display: inline-block;
  position: relative;
  text-decoration: none;

  padding: 0.5rem 0;
  margin-left: 1rem;
  font-weight: 400;
  border-radius: 4px;

  color: var(--Theme-NavLink--Color);

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: var(--Theme-NavLink--Color);
    top: 55%;

    animation: ${strikeOut} 0.2s cubic-bezier(1, 0, 0.58, 0.97) 1 both;
  }

  &:hover:before {
    animation: ${strikeIn} 0.2s cubic-bezier(1, 0, 0.58, 0.97) 1 both;
  }

  ${(props): string =>
    props.disabled
      ? `
          color: var(--Theme-NavLink--Color__onHover);
          pointer-events: none;
          cursor: default;
        `
      : ``}
`

export default NavLink

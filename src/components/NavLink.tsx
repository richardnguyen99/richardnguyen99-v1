import styled, { css } from 'styled-components'

export interface NavLink {
  color?: string
  disabled?: boolean
  button?: boolean

  [p: string]: any
}

const NavLink = styled.a<NavLink>`
  display: inline-block;
  padding-right: 0.5rem;
  padding-left: 0.5rem;

  color: var(--Theme-NavbarLink--Color);

  &:hover,
  &:focus {
    text-decoration: none;
  }

  ${props =>
    props.disabled &&
    css`
      color: var(--Theme-NavbarLink--Color__onHover);
      pointer-events: none;
      cursor: default;
    `}
`

export default NavLink

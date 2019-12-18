import styled from 'styled-components'

export interface NavLinkProps {
  color?: string
  disabled?: boolean
  button?: boolean

  [p: string]: any
}

const NavLink = styled.a<NavLinkProps>`
  display: inline-block;

  padding: 0.5rem;
  font-weight: 400;
  border-radius: 4px;

  color: var(--Theme-NavLink--Color);

  &:hover,
  &:focus {
    text-decoration: none;
    background: var(--Theme-NavLink--Background__onHover);
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

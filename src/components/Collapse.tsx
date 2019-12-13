import styled, { keyframes } from 'styled-components'
import NavLink from './NavLink'

export interface CollapseProps {
  show: boolean
  collapsed: boolean
}

const showDropdown = keyframes`
  0% {
    opacity: 0;
    transform: translate(0, 10px) perspective(200px) rotateX(-2deg);
    transition: visibility 0.25s, opacity 0.25s, transform 0.25s;
  }

  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
`

const hideDropdown = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate(0, 10px);
  }
`

const Collapse = styled.div<CollapseProps>`
  flex-basis: 100%;
  flex-grow: 1;

  align-items: center;

  @media screen and (max-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 30;

    margin: 0.5rem;

    overflow-y: auto;
    height: auto;

    padding: 1.5rem;
    border: 1px solid var(--Theme-Navbar--Border__onScroll);
    border-radius: 0.5rem;
    box-shadow: 1px 2px 18px var(--Theme-Navbar--BoxShadow__onScroll);
    background: var(--Theme-Navbar--Background);
    animation: ${props => (props.collapsed ? showDropdown : hideDropdown)} 300ms
      ease forwards;
    opacity: ${props => (!props.show ? 0 : 1)};

    ${NavLink} {
      padding: 0;
    }
  }

  display: ${props => (!props.show ? `none` : ``)};
`

export default Collapse

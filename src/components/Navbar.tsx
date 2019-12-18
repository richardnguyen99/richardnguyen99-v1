import styled from 'styled-components'

import media from '../utils/mediaQuery'
import Collapse from './Collapse'
import Container from './Container'
import Toggler from './Toggler'
import Nav from './Nav'

interface NavbarProps {
  transparent: boolean
}

const Navbar = styled.nav<NavbarProps>`
  /* Declare position of navbar */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;

  /* Use flex utilities for controlling alignments */
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Add more space to navbar to look comfortable */
  padding-top: ${(props): string => (props.transparent ? '1.5rem' : '0.5rem')};
  padding-right: 0.5rem;
  padding-bottom: ${(props): string =>
    props.transparent ? '1.5rem' : '0.5rem'};
  padding-left: 0.5rem;

  background: ${(props): string =>
    props.transparent ? 'transparent' : 'var(--Theme-Navbar--Background)'};
  color: ${(props): string =>
    props.transparent ? '#ffffff' : 'var(--Theme-Body--Text)'};

  border-bottom: ${(props): string =>
    !props.transparent ? 'var(--Theme-Border__onScroll)' : 'none'};
  box-shadow: ${(props): string =>
    !props.transparent ? 'var(--Theme-BoxShadow__onScroll)' : 'none'};

  transition: padding 0.4s linear;

  /* Redeclare because flex properties aren't not inherited */
  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${media.lg`
    flex-flow: row nowrap;
    justify-content: flex-start;

    ${Nav} {
      flex-direction: row;
    }

    ${Container} {
      flex-flow: nowrap;
    }

    ${Collapse} {
      display: flex;
    }

    ${Toggler} {
      display: none;
    }
  `}
`

export default Navbar

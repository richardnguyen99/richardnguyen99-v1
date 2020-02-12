import React from 'react'
import styled, { keyframes, Keyframes } from 'styled-components'
import { Link } from 'gatsby'
import Octicon, { ChevronDown } from '@primer/octicons-react'

import { media } from '@styles'
import { Container, ProgressBar } from '@components'

// Define interface for Header to type-check params
interface HeaderProps {
  siteTitle: string
}

interface NavbarProps {
  transparent: boolean
}

const StyledNav = styled.ul`
  /* Use flex utilities to control alignments */
  display: flex;
  flex-direction: column;

  list-style: none;
  height: 100%;
  margin: 0 0 0 auto;
`

const StyledNavItem = styled.li`
  padding-right: 0rem;
  padding-left: 1.5rem;
`

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

const StyledNavLink = styled.a<NavLinkProps>`
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

const StyledCollapse = styled.div<CollapseProps>`
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
    border: var(--Theme-Border__onScroll);
    border-radius: 0.5rem;
    box-shadow: var(--Theme-BoxShadow__onScroll);
    background: var(--Theme-Navbar--Background);
    animation: ${(props): Keyframes =>
        props.collapsed ? showDropdown : hideDropdown}
      300ms ease forwards;
    opacity: ${(props): number => (!props.show ? 0 : 1)};

    ${StyledNavItem} {
      padding-top: 0.5rem;
      padding-right: 0rem;
      padding-bottom: 0.5rem;
      padding-left: 0rem;
    }
  }

  display: ${(props): string => (!props.show ? `none` : ``)};
`

const StyledToggler = styled.button`
  padding: 0.75rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: initial;
  border: none;
  z-index: 100;

  color: var(--Theme-Body--Text);
`

export interface BrandProps {
  [c: string]: any
}

const StyledBrand = styled.a<BrandProps>`
  /* Help content and logo stay in the same block */
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 0.5rem;
  line-height: inherit;
  white-space: nowrap;
  letter-spacing: 4px;

  color: var(--Theme-NavLink--Color);
  font-size: 1.25rem;
  font-weight: 700;

  &:hover,
  &:focus {
    color: var(--Theme-NavLink--Color__onHover);
    text-decoration: none;
  }
`

const StyledNavbar = styled.nav<NavbarProps>`
  /* Declare position of navbar */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;

  /* Use flex utilities for controlling alignments */
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Add more space to navbar to look comfortable */
  padding-top: ${(props): string => (props.transparent ? '1.5rem' : '0.5rem')};
  padding-bottom: ${(props): string =>
    props.transparent ? '1.5rem' : '0.5rem'};

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

    ${StyledNav} {
      flex-direction: row;
    }

    ${Container} {
      flex-flow: nowrap;
    }

    ${StyledCollapse} {
      display: flex;
    }

    ${StyledToggler} {
      display: none;
    }
  `}
`

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  // Handle dropdown menu when on responsive mode
  const [show, setShow] = React.useState<boolean>(false)
  const [collapsed, setCollapsed] = React.useState<boolean>(false)

  // Handle transparency of navbar
  const [transparent, setTransparent] = React.useState<boolean>(true)

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault()

    // Make sure always trigger when both states are same.
    if (show && collapsed) {
      setCollapsed(!collapsed)
      // Remember to set the time correctly corresponding to the keyframe
      // `hideDropdown` of Collapse
      setTimeout(() => setShow(!show), 300)
    } else if (!show && !collapsed) {
      setShow(!show)
      setCollapsed(!collapsed)
    }
  }

  const handleScroll = (): void => {
    const currentHeight =
      window.pageYOffset || document.documentElement.scrollTop

    if (currentHeight > 50) {
      setTransparent(false)
    }

    if (currentHeight < 10) {
      setTransparent(true)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return (): void => {
      return window.removeEventListener('scroll', handleScroll)
    }
  }, [transparent])

  return (
    <header id="header-global">
      <ProgressBar />
      <StyledNavbar transparent={transparent}>
        <Container>
          <StyledBrand as={Link} to="/">
            RICHARD
          </StyledBrand>
          <StyledToggler onClick={handleClick}>
            <Octicon icon={ChevronDown} />
          </StyledToggler>
          <StyledCollapse show={show} collapsed={collapsed}>
            <StyledNav>
              <StyledNavItem>
                <StyledNavLink as={Link} to="#about">
                  About
                </StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink as={Link} to="#blog">
                  Blogs
                </StyledNavLink>
              </StyledNavItem>
              <StyledNavItem>
                <StyledNavLink as={Link} to="#projects">
                  Projects
                </StyledNavLink>
              </StyledNavItem>
            </StyledNav>
          </StyledCollapse>
        </Container>
      </StyledNavbar>
    </header>
  )
}

export default Header

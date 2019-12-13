import { Link } from 'gatsby'
import React from 'react'
import Octicon, { ChevronDown } from '@primer/octicons-react'

import Navbar from './Navbar'
import Container from './Container'
import Nav from './Nav'
import NavItem from './NavItem'
import NavLink from './NavLink'
import Brand from './Brand'
import Collapse from './Collapse'
import Toggler from './Toggler'

// Define interface for Header to type-check params
interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  // Handle dropdown menu when on responsive mode
  const [show, setShow] = React.useState<boolean>(false)
  const [collapsed, setCollapsed] = React.useState<boolean>(false)

  // Handle transparency of navbar
  const [transparent, setTransparent] = React.useState<boolean>(true)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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

  const handleScroll = () => {
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

    return () => {
      return window.removeEventListener('scroll', handleScroll)
    }
  }, [transparent])

  return (
    <header id="global">
      <Navbar transparent={transparent}>
        <Container>
          <Brand as={Link} to="/">
            {siteTitle}
          </Brand>
          <Toggler onClick={handleClick}>
            <Octicon icon={ChevronDown}/>
          </Toggler>
          <Collapse show={show} collapsed={collapsed}>
            <Nav>
              <NavItem>
                <NavLink as={Link} to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink as={Link} to="/blog">
                  Blogs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink as={Link} to="/projects">
                  Projects
                </NavLink>
              </NavItem>
            </Nav>
            <Nav style={{ marginLeft: 'auto'}}>
              <NavLink as={Link} to="/projects">
                sProjects
              </NavLink>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

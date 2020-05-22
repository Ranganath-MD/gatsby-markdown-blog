import React, { useState } from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/header.module.scss"
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse
} from "shards-react";
import Logo from "../images/day.svg"

const Header = () => {
  const [collapseOpen, setCollapseOpen] = useState(false)

  const toggleNavbar = () => {
    setCollapseOpen(!collapseOpen)
  }
  return (
    <Navbar type="dark" theme="light" expand="md" className={headerStyles.navbar}>
        <Link to="/" className={headerStyles.title} activeClassName={headerStyles.activeTitle}>
        <img src={Logo} alt="logo" width="60px" height="60px" />
        </Link>
      <NavbarToggler onClick={toggleNavbar} className={headerStyles.toggler}/>

        <Collapse open={collapseOpen} navbar style={{ justifyContent: "flex-end"}}>
          <Nav navbar>
            <NavItem>
            <Link to="/react-js" className={headerStyles.link} activeClassName={headerStyles.activeLink} > React Js</Link>
            </NavItem>
            <NavItem>
            <Link to="/node-js" className={headerStyles.link} activeClassName={headerStyles.activeLink}> Node Js</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  )
}
export default Header

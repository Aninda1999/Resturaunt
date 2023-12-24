import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavItem, Nav, NavbarToggler, Collapse } from 'reactstrap'

const NavComponent = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navToggle = () => {
        setIsNavOpen(!isNavOpen)
    }
    return (
        <div>
            <Navbar
                className="my-2"
                color="secondary"
                dark
                expand="sm"
            >
                <NavbarToggler onClick={navToggle} />
                <NavbarBrand href="/">
                    Caboose's Bowl
                </NavbarBrand>

                <Collapse isOpen={isNavOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <Link to="/" className='nav-link'>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/menu" className='nav-link'>Menu</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className='nav-link'>About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className='nav-link'>Contact</Link>
                        </NavItem>


                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavComponent
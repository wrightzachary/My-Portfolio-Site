import React from 'react';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {HiOutlinePhone, HiOutlineMail} from 'react-icons/hi';
import {FiLinkedin, FiGithub} from 'react-icons/fi';


const Navigation = () => {
    return ( 
        <React.Fragment>
           <Navbar sticky="top" expand="lg">
            <Navbar.Brand ><h3>Zachary Wright</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="tel:254-423-2200"><HiOutlinePhone size={32} /></Nav.Link>
                    <Nav.Link href="mailto:taylorzw96@gmail.com"><HiOutlineMail size={32} /></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/wrightzacharydev/"><FiLinkedin size={32} /></Nav.Link>
                    <Nav.Link href="https://github.com/wrightzachary"><FiGithub size={32} /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
     );
}
 
export default Navigation;
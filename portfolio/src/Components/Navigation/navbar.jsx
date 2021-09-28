import React from 'react';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {HiOutlinePhone, HiOutlineMail} from 'react-icons/hi';
import {FiLinkedin, FiGithub} from 'react-icons/fi';


const Navigation = () => {
    return ( 
        <React.Fragment>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               <Container>
            <Navbar.Brand href="#home">Zachary Wright</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="tel:254-423-2200"><HiOutlinePhone /></Nav.Link>
                    <Nav.Link href="mailto:taylorzw96@gmail.com"><HiOutlineMail /></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/wrightzacharydev/"><FiLinkedin /></Nav.Link>
                    <Nav.Link href="https://github.com/wrightzachary"><FiGithub /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </React.Fragment>
     );
}
 
export default Navigation;
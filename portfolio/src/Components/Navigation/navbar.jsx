import React from 'react';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {HiOutlinePhone, HiOutlineMail} from 'react-icons/hi';
import {FiLinkedin, FiGithub} from 'react-icons/fi';
import Typed from 'react-typed';
import './navbar.css';


const Navigation = () => {
    return ( 
        <React.Fragment>
            <Container className='h-100'>
            <Navbar expand="lg" variant="dark">
            <Navbar.Brand >
                <h1> <Typed 
                    strings={['Zachary the Developer']}
                    typeSpeed={60}  
                    loop
                /></h1>    
            </Navbar.Brand> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="mailto:taylorzw96@gmail.com"><HiOutlineMail size={32} color='white'/></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/wrightzacharydev/"><FiLinkedin size={32} color='white'/></Nav.Link>
                    <Nav.Link href="https://github.com/wrightzachary"><FiGithub size={32} color='white' /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </Container>
        </React.Fragment>
     );
}
 
export default Navigation;
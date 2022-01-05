import React from 'react';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {HiOutlinePhone, HiOutlineMail} from 'react-icons/hi';
import {FiLinkedin, FiGithub} from 'react-icons/fi';
import Typed from 'react-typed';
import './navbar.css';


const Navigation = () => {
    return ( 
        <React.Fragment>
            <Container  id="home" className='h-100 myNav'>
            <Navbar expand="lg" variant="dark" className='nav'>
            <Navbar.Brand >
                <h2> <Typed 
                    strings={['Zachary the Developer']}
                    typeSpeed={60}  
                    loop
                /></h2>    
            </Navbar.Brand> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="#aboutMe">.01 About Me</Nav.Link>
                    <Nav.Link>  |   </Nav.Link>
                    <Nav.Link href="#technologies">.02 Technologies</Nav.Link>
                    <Nav.Link>  |   </Nav.Link>
                    <Nav.Link href="#projects">.03 My Projects</Nav.Link>
                    <Nav.Link>  |   </Nav.Link>
                    <Nav.Link href="#contact">.04 Contact Me</Nav.Link>
                    {/* <Nav.Link href="mailto:taylorzw96@gmail.com"><HiOutlineMail size={32} color='white'/></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/wrightzacharydev/"><FiLinkedin size={32} color='white'/></Nav.Link>
                    <Nav.Link href="https://github.com/wrightzachary"><FiGithub size={32} color='white' /></Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </Container>
        </React.Fragment>
     );
}
 
export default Navigation;
import React from 'react';
import './footer.css';
import {HiOutlinePhone, HiOutlineMail} from 'react-icons/hi';
import {FiLinkedin, FiGithub} from 'react-icons/fi';


const Footer = () => {
    return ( 
        <React.Fragment>
            <div className="footer">
                <a href="tel:254-423-2200"><HiOutlinePhone size={32} /> Call me </a>
                <a href="mailto:taylorzw96@gmail.com"><HiOutlineMail size={32}/> Email Me</a>
                
                <a href="https://www.linkedin.com/in/wrightzacharydev/"><FiLinkedin  size={32}/> Connect On LinkedIn </a>
                <a href="https://github.com/wrightzachary"><FiGithub size={32} /> See My Code </a>
            </div>
        </React.Fragment>
     );
}
 
export default Footer;
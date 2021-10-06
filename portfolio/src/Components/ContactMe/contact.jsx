import React from 'react';
import './contact.css';
import {HiOutlinePhone, HiOutlineMail} from 'react-icons/hi';

const Contact = () => {
    return ( 
        <React.Fragment>
            <div className="contact">
                <h1>Contact Me</h1>
                <a href="tel:254-423-2200"><HiOutlinePhone size={50} /></a>
                <a href="mailto:taylorzw96@gmail.com"><HiOutlineMail size={50} /></a>
            </div>
        </React.Fragment>
     );
}
 
export default Contact;
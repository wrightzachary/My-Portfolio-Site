import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import {HiOutlinePhone, HiOutlineMail} from 'react-icons/hi';
import { Container, Row, Col, Button} from 'react-bootstrap';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tjqlk38', 'template_kuqfzx5', form.current, 'user_1lF6zNNvN03UJ8bSN4jqT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <Container id='contact' className='contactContainer'>
      <Row>
      {/* <Col sm={5}></Col> */}
      <Col sm={6}></Col>
      <Col sm={6}>
        <div className='contact'>
        <h1>.04 Contact Me</h1>
        <hr></hr>
      </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder='NAME' className="mt-2 mb-2 name" />
          <br></br>
          <input type="email" name="user_email" placeholder='EMAIL' className="mt-2 mb-2 email"/>
          <br></br>
          <textarea type="email" name="message" placeholder='MESSAGE' className="mt-2 mb-2 message"/>
          <br></br>
          <Button style={{backgroundColor: "#BD871F", borderColor: "white"}} type="submit" value="Send" className="mt-2 mb-2 button" >Send Email</Button>
        </form>
        </Col>
      </Row>
    </Container>
   
  );
    // return ( 
    //     <React.Fragment>
    //         <div className="contact">
    //             <h1>Contact Me</h1>
    //             <a href="tel:254-423-2200"><HiOutlinePhone size={50} /></a>
    //             <a href="mailto:taylorzw96@gmail.com"><HiOutlineMail size={50} /></a>
    //         </div>
    //     </React.Fragment>
    //  );
}
 
export default Contact;
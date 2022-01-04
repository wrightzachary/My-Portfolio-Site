import React from 'react';
import './aboutMe.css';
import { Col, Container, Row, Card } from "react-bootstrap";
import photoofme from '../Images/photoofme.jpg';

const AboutMe = () => {
    return ( 
        <React.Fragment>
            <div className='aboutMe'>
            <Container>
            <Row>
                {/* <Col sm={1}></Col> */}
                <Col sm={6}>
                    <h1>.01 About Me</h1>
                    <hr></hr>
                            <div className="about">
                            <p>
                                Hi, everyone I'm Zach! I am an Army Veteran who served six years active duty, and
                                I live in Central Texas where I started my journey to become a developer during
                                my trasition out of the Army. I wanted to give myself an edge when it came to looking 
                                for a job so I decidied to attend devCodeCamp, a coding boot camp.
                                <br></br>
                                <br></br>

                                After devCodeCamp I decided to continue my B.S. in Computer Science, which I am set to 
                                graduate next year! Follow me on my journey of getting my first developer job through GitHub
                                and LinkedIn, both profiles can be found in the navigation bar up top.
                            </p>
                            </div>
                </Col>
                <Col sm={1}></Col>
                <Col sm={5}>
                    <div className="photoOfMe">
                        <img className='photoOfMe' src={photoofme} alt="Me, Myself, and I" width="90%"  />
                    </div>
                </Col>
            </Row>
            </Container>
            </div>
        </React.Fragment>
     );
}
 
export default AboutMe;
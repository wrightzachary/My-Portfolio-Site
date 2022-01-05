import React from 'react';
import './aboutMe.css';
import { Col, Container, Row, Card } from "react-bootstrap";
import photoofme from '../Images/photoofme.jpg';
import { VscFoldDown } from 'react-icons/vsc';


const AboutMe = () => {
    return ( 
        <React.Fragment>
            <Container id='aboutMe'>
            <div className='aboutMe'>
            <Row>
                {/* <Col sm={1}></Col> */}
                <Col sm={6}>
                    <div className='aboutMeHeading'>
                        <h1>.01 About Me</h1>
                        <hr></hr>
                    </div>
                    <div className="about">
                        <p>
                            I am an Army Veteran who served six years active duty, and I live in Central Texas 
                            where I started my journey to become a Software Developer during my trasition out of the Army. 
                            I wanted to give myself an edge when it came to looking for a job so I decided to 
                            attend devCodeCamp, a coding bootcamp.
                            <br></br>
                            <br></br>

                            After devCodeCamp, I decided to continue my B.S. in Computer Science, which I am set to 
                            graduate next year in 2023! Follow me on my journey of getting my first developer job through 
                            GitHub and LinkedIn.
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
            </div>
            </Container>
        </React.Fragment>
     );
}
 
export default AboutMe;
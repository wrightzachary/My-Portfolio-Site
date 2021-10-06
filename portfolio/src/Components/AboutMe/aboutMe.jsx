import React from 'react';
import './aboutMe.css';
import { Col, Container, Row, Card } from "react-bootstrap";
import photoofme from '../Images/photoofme.jpg';

const AboutMe = () => {
    return ( 
        <React.Fragment>
            <div className='aboutCard'>
            <Container>
            <Row>
                <Col sm={8}></Col>
                <Col sm={4}></Col>
            </Row>
            </Container>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                        <Card
                        className="card-container border border-primary "
                        style={{ width: "40rem", margin: "1rem" }}
                        >
                        <Card.Body>
                            <div id="aboutMe" className="aboutHeader">
                                <Card.Text><h2>About Me</h2></Card.Text>
                            </div>
                            <hr></hr>
                            <Card.Text>
                            <div className="about">
                            <p>
                                Hi, everyone I'm Zach! I am a veteran who served six years active duty
                                with the United States Army. I live in Central Texas about an hour north of Austin, TX. I have been married
                                to my wife for four years. We have no kids but we have three amazing dogs. I started on the journey to become 
                                a developer about two years ago. I was self taught for some, but vast of my knowledge has come from coding bootcamp devCodeCamp.
                                devCodeCamp has taught me how to think like a developer and put problem solving to the test through both solo and group projects. 
                            </p>
                            </div>
                            </Card.Text>
                        </Card.Body>
                        <img src={photoofme} alt="Me, Myself, and I" width="90%" />
                    </Card>
                </Row>
                <Col sm={4}></Col>
            </Container>
            </div>
        </React.Fragment>
     );
}
 
export default AboutMe;
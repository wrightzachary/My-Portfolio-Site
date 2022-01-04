import React from 'react';
import { Col, Container, Row, Card } from "react-bootstrap";
import './home.css';
import bitmoji1 from '../Images/bitmoji1.png';
import Typed from 'react-typed';

const Home = () => {
    return ( 
        <React.Fragment>
            <div id="home" className="home">
            <Container>
            <Row>
                <Col sm={8}>
                    <h1>Howdy, Y'all!</h1>
                    <h5>My Name is</h5>
                    <h1>Zachary Wright</h1>
                    <h2>I build solutions to real world problems</h2>
                    <h5>
                        I am a Software Developer that is looking for his first role in the tech industry. 
                        Currently I am focused on growing my knowledge while I find my first developement 
                        role, but I am  also a co-host for the podcast codeFellowship().
                    </h5>
                </Col>
                {/* <Col sm={1}></Col> */}
                {/* <Col sm={4}>
                    <img src={bitmoji1} alt="Bitmoji"  />
                </Col> */}
            </Row>
            </Container>
            </div>
        </React.Fragment>
     );
}
 
export default Home;
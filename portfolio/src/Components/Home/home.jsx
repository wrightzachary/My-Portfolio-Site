import React from 'react';
import { Col, Container, Row, Card } from "react-bootstrap";
import './home.css';
import bitmoji1 from '../Images/bitmoji1.png';
import Typed from 'react-typed';
import { VscFoldDown } from 'react-icons/vsc';

const Home = () => {
    return ( 
        <React.Fragment>
            <div id="home" className="home">
            <Container>
            <Row>
                <Col sm={8}>
                    <h1>Howdy, Y'all!</h1>
                    <div className='myName'>
                        <h4>My Name is</h4>
                    </div>
                    <h1>Zachary Wright</h1>
                    <div className='buildSolutions'>
                        <h2>I build solutions for real world problems</h2>
                    </div>
                    <h5>
                        I am a Software Developer that is looking for his first role in the tech industry. 
                        Currently I am focused on growing my knowledge while I find my first developement 
                    </h5>
                    <a href='#aboutMe'><VscFoldDown className='downIcon' size={50} /></a>

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
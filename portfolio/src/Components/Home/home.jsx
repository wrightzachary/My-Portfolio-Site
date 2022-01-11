import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './home.css';
import { VscFoldDown } from 'react-icons/vsc';

const Home = () => {
    return ( 
        <React.Fragment>
            <div className="home">
            <Container>
            <Row>
                <Col sm={8}>
                    <h1>Howdy Y'all, I am Zachary Wright</h1>
                    <div className='buildSolutions'>
                        <h2>I build solutions for real world problems</h2>
                    </div>
                    <h4>
                        I am a Software Developer that is looking for his first role in the tech industry. 
                        Currently I am focused on growing my knowledge while I find my first developer role.
                    </h4>
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
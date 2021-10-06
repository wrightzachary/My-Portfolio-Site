import React from 'react';
import './technologies.css';
import { Col, Container, Row, Card } from "react-bootstrap";
import {AiOutlineAntDesign} from 'react-icons/ai';


const Technologies = () => {
    return ( 
        <React.Fragment>
            <div className='technologyCard'>
                <h1>Technologies</h1>
            <Container>
            <Row>
                <Col sm={4}>
                <Container fluid>
                <Row className="d-flex justify-content-center">
                        <Card
                        className="card-container border border-primary "
                        style={{ width: "40rem", margin: "1rem" }}
                        >
                        <Card.Body>
                            <div className="technologyHeader">
                                <Card.Text><h2>Front End Development</h2></Card.Text>
                            </div>
                            <hr></hr>
                            <Card.Text>
                            <div className="technology">
                            <p>
                                <AiOutlineAntDesign size={15} /> HTML5<br></br>
                                <AiOutlineAntDesign size={15} /> CSS<br></br>
                                <AiOutlineAntDesign size={15} /> React.js<br></br>
                                <AiOutlineAntDesign size={15} /> Material-UI<br></br>
                                <AiOutlineAntDesign size={15} /> Styled Components
                               
                            </p>
                            </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            </Col>
            <Col sm={4}>
            <Container fluid>
            <Row className="d-flex justify-content-center">
                <Card
                    className="card-container border border-primary "
                    style={{ width: "40rem", margin: "1rem" }}
                >
                <Card.Body>
                    <div className="technologyHeader">
                        <Card.Text><h2>Back End Development</h2></Card.Text>
                    </div>
                    <hr></hr>
                    <Card.Text>
                    <div className="technology">
                    <p>
                    <AiOutlineAntDesign size={15} /> ASP.NET Core Entity Framework<br></br>
                        <AiOutlineAntDesign size={15} /> Django REST Framework<br></br>
                        <AiOutlineAntDesign size={15} /> MySQL<br></br>
                        <AiOutlineAntDesign size={15} /> MSSQL<br></br>
                        <AiOutlineAntDesign size={15} /> Axios
                    </p>
                    </div>
                    </Card.Text>
                </Card.Body>
                </Card>
                </Row>
            </Container>
            </Col>
            <Col sm={4}>
            <Container fluid>
            <Row className="d-flex justify-content-center">
                    <Card
                    className="card-container border border-primary "
                    style={{ width: "40rem", margin: "1rem" }}
                    >
                    <Card.Body>
                        <div className="technologyHeader">
                            <Card.Text><h2>Source Control & Tech</h2></Card.Text>
                        </div>
                        <hr></hr>
                        <Card.Text>
                        <div className="technology">
                        <p>
                            <AiOutlineAntDesign size={15} /> GitHub<br></br>
                            <AiOutlineAntDesign size={15} /> Git<br></br>
                            <AiOutlineAntDesign size={15} /> Postman<br></br>
                            <AiOutlineAntDesign size={15} /> Slack<br></br>
                            <AiOutlineAntDesign size={15} /> Discord
                            
                        </p>
                        </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            </Container>
            </Col>
            </Row>
            </Container>
            </div>
        </React.Fragment>
     );
}
 
export default Technologies;
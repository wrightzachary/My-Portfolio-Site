import React from 'react';
import './technologies.css';
import { Col, Container, Row, } from "react-bootstrap";
import {AiOutlineAntDesign} from 'react-icons/ai';


const Technologies = () => {
    return ( 
        <React.Fragment>
            <Row>
            <Col sm={6}>
                <div className='technologyHeading'>
                    <h1>.02 Technologies</h1>
                    <hr></hr>
                </div>
                </Col>
            <Col sm={1}></Col>
            <Col sm={5}></Col>
            </Row>
            <div className='technologies'>
            <Container>
             
            <Row>
                <Col sm={4}>
                <Container fluid>
                <Row className="d-flex justify-content-center">
                            <div className="technologyHeader">
                           
                               <h2>Front End Development </h2> 
                            </div>
                            <hr></hr>
                            <div className="technology">
                            <p>
                                <AiOutlineAntDesign size={15} /> HTML5<br></br>
                                <AiOutlineAntDesign size={15} /> CSS<br></br>
                                <AiOutlineAntDesign size={15} /> React.js<br></br>
                                <AiOutlineAntDesign size={15} /> Material-UI<br></br>
                                <AiOutlineAntDesign size={15} /> Styled Components
                               
                            </p>
                            </div>
                </Row>
            </Container>
            </Col>
            <Col sm={4}>
            <Container fluid>
            <Row className="d-flex justify-content-center">
                    <div className="technologyHeader">
                        <h2>Back End Development</h2>
                    </div>
                    <hr></hr>
                    <div className="technology">
                    <p>
                    <AiOutlineAntDesign size={15} /> ASP.NET Core Entity Framework<br></br>
                        <AiOutlineAntDesign size={15} /> Django REST Framework<br></br>
                        <AiOutlineAntDesign size={15} /> MySQL<br></br>
                        <AiOutlineAntDesign size={15} /> MSSQL<br></br>
                        <AiOutlineAntDesign size={15} /> Axios
                    </p>
                    </div>
                </Row>
            </Container>
            </Col>
            <Col sm={4}>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                            <div className="technologyHeader">
                                <h2>Source Control and Technologies</h2>
                            </div>
                            <hr></hr>
                            <div className="technology">
                            <p>
                                <AiOutlineAntDesign size={15} /> GitHub<br></br>
                                <AiOutlineAntDesign size={15} /> Git Bash<br></br>
                                <AiOutlineAntDesign size={15} /> GitHub Desktop<br></br>
                                <AiOutlineAntDesign size={15} /> Postman<br></br>
                                <AiOutlineAntDesign size={15} /> MySQL Workbench<br></br>
                                <AiOutlineAntDesign size={15} /> Slack<br></br>
                                <AiOutlineAntDesign size={15} /> Discord<br></br>
                                <AiOutlineAntDesign size={15} /> Visual Studio Code<br></br>
                                <AiOutlineAntDesign size={15} /> Visual Studio <br></br>
                                <AiOutlineAntDesign size={15} /> PyCharm<br></br>
                            </p>
                            </div>
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
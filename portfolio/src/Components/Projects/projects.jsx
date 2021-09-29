import React from 'react';
import { Col, Container, Row, Card } from "react-bootstrap";
import igy6 from '../Images/igy6.png';
import ecommerce from '../Images/ecommerce.png';
import './projects.css';
import {FiGithub} from 'react-icons/fi';
import GitHub from '../Images/GitHub.PNG';


const Projects = () => {
    return ( 
        <React.Fragment>
            <div className='projectCard'>
                <h1>My Projects </h1>
            <Container>
            <Row>
                <Col sm={4}>
                <Container fluid>
                <Row className="d-flex justify-content-center">
                        <Card id="projects"
                        className="card-container border border-primary "
                        style={{ width: "40rem", margin: "1rem" }}
                        >
                        <Card.Body>
                            <div className="projectHeader">
                                <Card.Text><h1>;IGY6</h1><a href="https://github.com/wrightzachary/Capstone-Frontend"><FiGithub size={32} /></a></Card.Text>
                            </div>
                            <hr></hr>
                            <Card.Text>
                            <div className="project">
                            <p>
                               ;IGY6 is my personal capstone comepleted in a 10 day code sprint at devCodeCamp. This application brings awareness to veteran suicide, allows users to find a VA Hospital, connect on a blog, and shows an interactive graph that displays veteran suicides rates by year. 
                            </p>
                            </div>
                            </Card.Text>
                        </Card.Body>
                        <img src={igy6} alt="IGY6 Project" />
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
                            <div className="projectHeader">
                                <Card.Text><h1>eCommerce</h1><a href="https://github.com/wrightzachary/Ecommerce-Front-End"><FiGithub size={32} /></a></Card.Text>
                            </div>
                            <hr></hr>
                            <Card.Text>
                            <div className="project">
                            <p>
                               This project was my group capstone at devCodeCamp. This application brings Star Wars product shopping to a whole new level. This application allows users to purchase products through Stripe, post products to sell, and post and review comments for products. 
                            </p>
                            </div>
                            </Card.Text>
                        </Card.Body>
                        <img src={ecommerce} alt="eCommerce Project" />
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
                            <div className="projectHeader">
                                <Card.Text><h1>More Projects</h1><a href="https://github.com/wrightzachary"><FiGithub size={32} /></a></Card.Text>
                            </div>
                            <hr></hr>
                            <Card.Text>
                            <div className="project">
                            <p>
                               I have more projects on my GitHub. Some are console applications while some are full stack applications. Please view my GitHub to see what I have completed. I am constantly working on new projects and maintenance of older
                               projects. Please let me know what you think!
                            </p>
                            </div>
                            </Card.Text>
                        </Card.Body>
                        <img src={GitHub} alt="GitHub Overview" />
                        
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
 
export default Projects;
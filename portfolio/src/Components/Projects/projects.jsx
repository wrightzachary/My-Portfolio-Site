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
            <Row>
                <Col sm={6}>
                    <div className='projectCard'>
                        <h1>.03 My Projects </h1><hr></hr>
                    </div>
                </Col>
                <Col sm={1}></Col>
                <Col sm={5}></Col>
            </Row>
            <Container>
            <Row className="projectOne">
                <div className="projectName">
                    <h2>;IGY6<a href="https://github.com/wrightzachary/Capstone-Frontend"><FiGithub size={32} color='white'/></a></h2>
                    <hr></hr>
                </div>
                <Col sm={6}>
                    <div className="project">
                        <p>
                            ;IGY6 is my personal capstone comepleted in a 10 day code sprint at devCodeCamp. This application brings awareness to veteran suicide, allows users to find a VA Hospital,
                            connect on a blog, and shows an interactive graph that displays veteran suicide rates by year. 
                        </p>
                    </div>
                </Col>
                <Col sm={6}>
                    <img src={igy6} alt="IGY6 Project" width="90%" />
                </Col>
                </Row>
                <Row className="projectTwo">
                    <div className="projectName">
                        <h2>eCommerce<a href="https://github.com/wrightzachary/Ecommerce-Front-End"><FiGithub size={32} color='white'/></a></h2>
                        <hr></hr>
                    </div>
                    <Col sm={6}>
                        <div className="project">
                            <p>
                                This project was my group capstone at devCodeCamp where we made a Star Wars themed eCommerce application.
                                This application allows users to purchase products through Stripe, post products to sell, and post and review comments for products. 
                            </p>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <img src={ecommerce} alt="eCommerce Project" width="90%"  />
                    </Col>
                </Row>
                <Row className="projects">
                    <div className="projectName">
                        <h2>Other Projects<a href="https://github.com/wrightzachary"><FiGithub size={32} color='white'/></a></h2>
                        <hr></hr>
                    </div>
                    <Col sm={6}>
                        <div className="project">
                        <p>
                            I have more projects on my GitHub. Some are console applications while some are full stack applications. Please view my GitHub to see what I have completed. I am constantly working on new projects and maintenance of older
                            projects. Please let me know what you think!
                        </p>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <img src={GitHub} alt="GitHub Overview" width="90%"  />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
     );
}
 
export default Projects;
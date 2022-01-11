import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import igy6 from '../Images/igy6.png';
import ecommerce from '../Images/ecommerce.png';
import './projects.css';
import {FiGithub} from 'react-icons/fi';
import GitHub from '../Images/GitHub.PNG';
import { VscFoldDown } from 'react-icons/vsc';


const Projects = () => {
    return ( 
        <React.Fragment>
            <Container id='projects' className='projectsContainer'>
            <Row>
                <Col sm={6}>
                    <div className='projectCard'>
                        <h1>.03 My Projects </h1>
                        <hr></hr>
                    </div>
                </Col>
                <Col sm={6}></Col>
            </Row>
            <Row className="projectOne">
                <div className="projectName">
                    <h2>;IGY6 - Veteran Suicide Awareness Application <a href="https://github.com/wrightzachary/Capstone-Frontend"><FiGithub size={32} color='#AFBDD1'/></a></h2>
                    <hr></hr>
                </div>
                <Col sm={6}>
                    <div className="project">
                        <p>
                            This project was my personal capstone comepleted in a 10 day code sprint at devCodeCamp. This application was built with React.js, ASP.NET Core Web API, 
                            and MSSQL. Using this application veterans can find a VA Hospital, connect on a blog, and shows an interactive graph that displays veteran suicide rates by year. 
                        </p>
                    </div>
                </Col>
                <Col sm={6}>
                <div className="projectPhoto">
                    <img src={igy6} alt="IGY6 Project" width="90%" />
                    </div>
                </Col>
                </Row>
                <Row className="projectTwo">
                    <div className="projectName">
                        <h2>eCommerce - Star Wars Themed Store Application <a href="https://github.com/wrightzachary/Ecommerce-Front-End"><FiGithub size={32} color='#AFBDD1'/></a></h2>
                        <hr></hr>
                    </div>
                    <Col sm={6}>
                        <div className="project">
                            <p>
                                This project was my group capstone at devCodeCamp where we made a Star Wars themed eCommerce application. This application was built with React.js, 
                                ASP.NET Core Web API, and MSSQL. This application allows users to view poducts, add products to their cart,  purchase products through Stripe API,
                                post products to sell, and post and review comments for products. 
                            </p>
                        </div>
                    </Col>
                    <Col sm={6}>
                    <div className="projectPhoto">
                        <img src={ecommerce} alt="eCommerce Project" width="90%"  />
                    </div>
                    </Col>
                </Row>
                <Row className="projects">
                    <div className="projectName">
                        <h2>Other Projects I Have Completed  <a href="https://github.com/wrightzachary"><FiGithub size={32} color='#AFBDD1'/></a></h2>
                        <hr></hr>
                    </div>
                    <Col sm={6}>
                        <div className="project">
                        <p>
                            I have more projects on my GitHub that are in Python, JavaScript, C#, and Java; some projects are console applications that I did while learning the language 
                            and some are full stack applications. Please view my GitHub to see what I have completed. I am constantly working on new projects and maintenance of older
                            projects. 
                        </p>
                        </div>
                    </Col>
                    <Col sm={6}>
                    <div className="projectPhoto">
                        <img src={GitHub} alt="GitHub Overview" width="90%"  />
                    </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
     );
}
 
export default Projects;
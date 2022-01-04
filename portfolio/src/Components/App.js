import React from 'react';
import AboutMe from './AboutMe/aboutMe.jsx';
import './App.css';
import Contact from './ContactMe/contact.jsx';
import Home from './Home/home';
import Navigation from './Navigation/navbar.jsx';
import Projects from './Projects/projects'
import Technologies from './Technologies/technologies.jsx';

function App() {
  return (
    <React.Fragment>
      <div className="portfolio">
        <Navigation />
        <Home />
        <AboutMe />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </React.Fragment>
  );
}

export default App;

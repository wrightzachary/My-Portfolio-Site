import React from 'react';
import AboutMe from './AboutMe/aboutMe.jsx';
import './App.css';
import Home from './Home/home';
import Navigation from './Navigation/navbar.jsx';
import Projects from './Projects/projects'

function App() {
  return (
    <React.Fragment>
      <div className="portfolio">
        <Navigation />
        <Home />
        <AboutMe />
        <Projects />
      </div>
    </React.Fragment>
  );
}

export default App;

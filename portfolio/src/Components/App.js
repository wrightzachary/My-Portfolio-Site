import React from 'react';
import AboutMe from './AboutMe/aboutMe.jsx';
import './App.css';
import Home from './Home/home';
import Navigation from './Navigation/navbar.jsx';
import Projects from './Projects/projects'

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Home />
      <AboutMe />
      <Projects />
    </React.Fragment>
  );
}

export default App;

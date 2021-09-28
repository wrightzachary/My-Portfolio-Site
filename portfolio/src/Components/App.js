import React from 'react';
import AboutMe from './AboutMe/aboutMe.jsx';
import './App.css';
import Home from './Home/home';
import Projects from './Projects/projects'

function App() {
  return (
    <React.Fragment>
      <Home />
      <AboutMe />
      <Projects />
    </React.Fragment>
  );
}

export default App;

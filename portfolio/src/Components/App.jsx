import React from "react";
import './App.css';
import Navigation from "./Navigation/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutMe from "./AboutMe/aboutMe";
import Home from "./Home/home";
import Projects from "./Projects/projects";

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

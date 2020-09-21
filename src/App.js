import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Blog from "./Components/Blog";
import Projects from "./Components/Projects";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App">
      <div className = "particles">
        <ParticlesBg
        type="cobweb"
        bg={true}
        color="#ff0000"
        num={100}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          opacity: "0.6",
        }}
      />
      </div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Route path="/projects" exact>
            <Navbar pointing={true} stackable={true} secondary={true} position={'right'}/>  
            <Projects />
          </Route>
          <Route path="/blog" exact>
            
            <Blog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

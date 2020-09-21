import React from "react";
import { Grid } from "semantic-ui-react";
import { Segment } from "semantic-ui-react";
import ParticlesBg from "particles-bg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resume from "./Resume";
import Projects from "./Projects";
import Blog from "./Blog";
import Home from "./Home";
import SidebarItems from "./SidebarItems";
import Navbar from "./Navbar";
import "./grid.css";

const GridExampleVerticallyDivided = () => (
  <div>
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

    <Grid stackable columns={2} style={{ height: "100vh" }} padded>
      <Grid.Column width={4} only="computer" centered>
        <Segment textAlign="center" style={{ position: "fixed" }}>
          <SidebarItems />
        </Segment>
      </Grid.Column>

      <Grid.Column width={12} only="mobile" centered>
        <Segment textAlign="center">
          <SidebarItems />
        </Segment>
      </Grid.Column>

      <Grid.Column width={12} only="tablet" centered>
        <Segment textAlign="center">
          <SidebarItems />
        </Segment>
      </Grid.Column>

      <Grid.Column width={12}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/resume" exact>
              <Resume />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
          </Switch>
        </Router>
      </Grid.Column>
    </Grid>
  </div>
);

export default GridExampleVerticallyDivided;

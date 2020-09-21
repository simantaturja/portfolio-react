import React from "react";
import { Segment, Container, Header } from "semantic-ui-react";
function Skills() {
  return (
    <div>
      <Container style={{marginTop: "20px"}}>
        <Segment piled color={"olive"}>
          <Header>Skills</Header>
        </Segment>
        <div class = "skill-box" style={{marginTop: "-20px", marginBottom:"50px"}}>
          <p>
            <strong>Languages: </strong>C++, C, Python, Javascript
          </p>
          <p>
            <strong>Web Frameworks: </strong>ReactJS, ExpressJS
          </p>
          <p>
            <strong>Machine Learning Frameworks: </strong>Pytorch
          </p>
          <p>
            <strong>Scientific Computing: </strong>Numpy, Pandas, Matlab,
            Matplotlib
          </p>
          <p>
            <strong>Databases: </strong>MongoDB, MySQL, MSSQL, Firebase
          </p>
          <p>
            <strong>Tools and OS: </strong>Git, Jupyter, OSX, Linux, Windows
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Skills;

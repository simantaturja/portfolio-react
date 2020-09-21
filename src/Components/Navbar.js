import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <Segment stacked compact style={{ position: props.position }}>
      <Menu
        textAlign={props.textAlign}
        stackable={props.stackable}
        pointing={props.pointing}
        secondary={props.secondary}
        size={props.size}
        color={props.color}
        vertical={props.vertical}
      >
        <Menu.Menu>
          <Menu.Item as={Link} to="/resume">
            Resume
          </Menu.Item>
          <Menu.Item as={Link} to="/projects">
            Projects
          </Menu.Item>
          <Menu.Item as={Link} to="/blog">
            Blog
          </Menu.Item>
          <Menu.Item as={Link} to="/courses">
            Courses
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Segment>
  );
}

export default Navbar;

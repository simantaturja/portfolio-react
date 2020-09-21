import React from "react";
import {Segment} from 'semantic-ui-react';

function SectionHeader(props) {

  const styles = {
    marginBottom: "20px"
  };

  return (
    <div>
      <Segment inverted = {props.inverted} piled color={props.color} style={styles}>
        <strong>{props.header}</strong>
      </Segment>
    </div>
  );
}

export default SectionHeader;

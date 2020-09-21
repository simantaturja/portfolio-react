import React from "react";
import {Icon} from 'semantic-ui-react';
function Location(props) {
  const styles = {
    marginTop: "20px"
  }
  return (
    <div style={styles}>
        <Icon name={"map pin"} size={"large"} />
        <p>Dhaka, Bangladesh</p>
    </div>
  );
}

export default Location;

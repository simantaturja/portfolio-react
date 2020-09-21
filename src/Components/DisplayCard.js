import React from "react";
import Typical from "./Typical";
import SocialIcons from "./SocialIcons";
import Title from "./Title";
import DisplayPicture from "./DisplayPicture";
import { Segment } from "semantic-ui-react";
import Navbar from "./Navbar";
import Location from "./Location";
function DisplayCard(props) {
  return (
    <div>
      <Segment
        piled
        textAlign={"center"}
        color={"olive"}
        style={{ position: props.position }}
        circular={props.circular}
        vertical={props.vertical}
      >
        <DisplayPicture />
        <Title />
        <Typical />
        <Location location="Dhaka, Bangladesh" />
        <SocialIcons />
        <Navbar secondary={true} size={"mini"} color={"white"} />
      </Segment>
    </div>
  );
}

export default DisplayCard;

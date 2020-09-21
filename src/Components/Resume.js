import React from "react";
import Skills from "./Skills";
import Education from "./Education";
import Technologies from "./Technologies";
import { Grid } from "semantic-ui-react";
import DisplayCard from "./DisplayCard";
import SectionHeader from "./SectionHeader";


function Resume() {
  return (
    <div>

    <Grid stackable columns={2} style={{ height: "100vh" }} padded>
      <Grid.Column width={4} only="computer" centered>
            <DisplayCard position="fixed"/>
      </Grid.Column>

      

      <Grid.Column width={12}>
      <SectionHeader header="Frequently used Technologies" color={'olive'} inverted={true}/>
      <Technologies />
      <Skills />
      <Education />
      </Grid.Column>
    </Grid>
  </div>
    
  );
}

export default Resume;

import React from "react";
import DisplayCard from "./DisplayCard";
import { Grid, Card } from "semantic-ui-react";
import Technologies from "./Technologies";
import SectionHeader from "./SectionHeader";
import CardItems from "./CardItems";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CardItemsBlog from "../DummyData/CardItemsBlog";
import CardItemsCourse from "../DummyData/CardItemsCourse";
import CardItemsProjects from "../DummyData/CardItemsProjects";

function Home() {
  const styles = {
    marginBottom: "60px",
  };
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const cardBlog = CardItemsBlog.map((item) => (
    <CardItems
      header={item.header}
      metadata={item.metadata}
      image={item.image}
    />
  ));

  const cardCourse = CardItemsCourse.map((item) => (
    <CardItems metadata={item.metadata} image={item.image} />
  ));

  const cardProjects = CardItemsProjects.map((item) => (
    <CardItems
      metadata={item.metadata}
      header={item.header}
      icon={item.icon}
      image={item.image}
    />
  ));

  return (
    <div>
      <Grid columns={2} padded>
        <Grid.Column width={4}>
          <DisplayCard position="fixed" />
        </Grid.Column>
        <Grid.Column width={12}>
          <SectionHeader
            color={"blue"}
            inverted={true}
            header="Frequently used Technologies"
          />
          <Technologies />
          <SectionHeader
            color={"olive"}
            inverted={true}
            header="Recent Blog Posts"
          />
          <Card.Group itemsPerRow={3} style={styles}>
            {cardBlog}
          </Card.Group>
          <div data-aos="flip-right">
            <SectionHeader
              color={"teal"}
              inverted={true}
              header="Trending Courses"
            />
            <Card.Group itemsPerRow={3} style={styles}>
              {cardCourse}
            </Card.Group>
          </div>
          <div data-aos="flip-left">
            <SectionHeader
              color={"green"}
              inverted={true}
              header="Recent Projects"
            />
            <Card.Group itemsPerRow={3} style={styles}>
              {cardProjects}
            </Card.Group>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Home;

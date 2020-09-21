import React from "react";
import SectionHeader from "./SectionHeader";
import Technologies from "./Technologies";
import { Card } from "semantic-ui-react";
import CardItems from "./CardItems";

function CardGroups() {
  const styles = {
    marginBottom: "60px",
  };
  return (
    <div>
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
        <CardItems
          header={"Meme (প্রবলেম) সলভিং সিরিজ-পর্ব ০১"}
          metadata={"100 reads"}
          image={"http://simantaturja.me/blog/meme.jpg"}
        />
        <CardItems
          header={"মিলার রবিন প্রাইমালিটি টেস্ট"}
          metadata={"200 reads"}
          image={
            "https://cdn.mos.cms.futurecdn.net/xYiTisbsp2HZPVupAZoNYQ-320-80.jpg"
          }
        />
        <CardItems
          header={"মিলার রবিন প্রাইমালিটি টেস্ট"}
          metadata={"200 reads"}
          image={
            "https://cdn.mos.cms.futurecdn.net/xYiTisbsp2HZPVupAZoNYQ-320-80.jpg"
          }
        />
      </Card.Group>
    </div>
  );
}

export default CardGroups;

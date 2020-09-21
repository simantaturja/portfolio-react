import React from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
function DisplayPicture() {
  return (
    <div>
      <Image
        as={Link}
        to="/"
        src="https://storage.googleapis.com/kaggle-avatars/images/3595461-kg.jpg"
        size="small"
        circular
        centered
      />
    </div>
  );
}

export default DisplayPicture;

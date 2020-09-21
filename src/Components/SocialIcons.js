import React from "react";
import { SocialIcon } from 'react-social-icons';

function SocialIcons() {
  
  const styles = {
    display: "inline-grid",
    gridTemplateColumns: "repeat(4, auto)",
    columnGap: "30px",
    marginTop: "20px"
  };


  return (
    <div>
      <div style={styles}>
        <SocialIcon url="https://linkedin.com/in/simantaturja" />
        <SocialIcon url="https://facebook.com/SD.Turja" />
        <SocialIcon url="https://github.com/simantaturja" bgColor="#000000" />
        <SocialIcon url="https://stackoverflow.com" />
      </div>
    </div>
  );
}

export default SocialIcons;

import React from "react";

import {
  DiJsBadge,
  DiNodejs,
  DiMongodb,
  DiHeroku,
  DiReact,
  DiPython,
  DiGithubFull,
  DiTerminal,
  DiVim,
  DiVisualstudio,
} from "react-icons/di";

function Technologies() {

  const styles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "60px"
  };

  return (
    
      
      <div style={styles}>
        <DiJsBadge size={"5em"} color="black" />
        <DiPython size={"5em"} color="orange" />
        <DiNodejs size={"6em"} color="green" />
        <DiReact size={"5em"} color="darkblue" />
        <DiMongodb size={"5em"} color="green" />
        <DiHeroku size={"5em"} color="darkblue" />
        <DiGithubFull size={"5em"} color="black" />
        <DiTerminal size={"5em"} color="black" />
        <DiVim size={"5em"} color="green" />
        <DiVisualstudio size={"5em"} color="blue" />
      </div>
    
  );
}

export default Technologies;

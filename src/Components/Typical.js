import React from "react";
import Typical from "react-typical";

function TypicalExample() {
  return (
    <Typical
      steps={[
        "Software Engineer",
        500,
        "Competitive Programmer",
        500,
        "Tech Enthusiast",
        500,
      ]}
      loop={Infinity}
      wrapper="p"
    />
  );
}
export default TypicalExample;

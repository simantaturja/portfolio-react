import React from "react";
import { Header } from "semantic-ui-react";
import { Link } from 'react-router-dom';
function Title() {
  return (
    <div>
      <Header size="large" as={Link} to='/'>
        Simanta Deb Turja
      </Header>
    </div>
  );
}

export default Title;

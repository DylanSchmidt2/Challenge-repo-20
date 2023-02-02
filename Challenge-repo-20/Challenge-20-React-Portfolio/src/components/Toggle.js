import React from "react";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";

function Toggle(props) {
  const { currentCategory } = props;

  if (currentCategory.name === "Resume") {
    return <Resume></Resume>;
  } else if (currentCategory.name === "Portfolio") {
    return <Portfolio></Portfolio>;
  } else {
    return <div></div>;
  }
}

export default Toggle;

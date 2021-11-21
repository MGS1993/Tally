import React from "react";

import TallyDisplay from "../components/TallyDisplay";

const Home = () => {
  return (
    <div style={mainWrapper}>
      <TallyDisplay />
    </div>
  );
};

const mainWrapper = {
  display: "flex",
  flexDirection: "column",
};

export default Home;

import React from "react";

import TallyDisplay from "../components/TallyDisplay";

const Home = ({ data }) => {
  return (
    <div style={mainWrapper}>
      <TallyDisplay data={data} />
    </div>
  );
};

const mainWrapper = {
  display: "flex",
  flexDirection: "column",
};

export default Home;

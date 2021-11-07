import React from "react";

import TallyDisplay from "../components/TallyDisplay";

const Home = () => {
  const users = {
    currentUser: { name: "Manuel", paidFor: 300 },
    otherUser: { name: "Victoria", paidFor: 172 },
  };
  return (
    <div style={mainWrapper}>
      <TallyDisplay
        currentUser={users.currentUser}
        otherUser={users.otherUser}
      />
    </div>
  );
};

const mainWrapper = {
  display: "flex",
  flexDirection: "column",
};

export default Home;

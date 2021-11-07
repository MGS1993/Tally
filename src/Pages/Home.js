import React from "react";

import TallyDisplay from "../components/TallyDisplay";

const Home = () => {
  const users = {
    currentUser: { name: "Manuel", paidFor: 300 },
    otherUser: { name: "Victoria", paidFor: 172 },
  };
  return (
    <div>
      <TallyDisplay
        currentUser={users.currentUser}
        otherUser={users.otherUser}
      />
    </div>
  );
};

export default Home;

import React from "react";

import TallyDisplay from "../components/TallyDisplay";
import TallyList from "../components/TallyList";

const Home = ({ data, setData, currentUser, linkedUser }) => {
  //TODO fix rerender on opening nav menu
  // console.log(currentUser);
  // console.log(linkedUser);
  return (
    <div style={mainWrapper}>
      <TallyDisplay
        data={data}
        currentUser={currentUser.userName}
        linkedUser={linkedUser?.userName}
      />

      <TallyList data={data} userId={currentUser._id} setData={setData} />
    </div>
  );
};

const mainWrapper = {
  display: "flex",
  flexDirection: "column",
  flex: "1",
};

export default Home;

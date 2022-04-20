import React from "react";

import TallyDisplay from "../components/TallyDisplay";
import TallyList from "../components/TallyList";
import { StyledPage } from "../components/styles/Page.styled";

const Home = ({ data, setData, currentUser, linkedUser }) => {
  //TODO fix rerender on opening nav menu
  // console.log(currentUser);
  // console.log(linkedUser);
  return (
    <StyledPage align="center" justifyContent="center" direction="column">
      {/* <div style={mainWrapper}> */}
      <TallyDisplay
        data={data}
        currentUser={currentUser.userName}
        linkedUser={linkedUser?.userName}
      />

      <TallyList data={data} userId={currentUser._id} setData={setData} />
    </StyledPage>
    // </div>
  );
};

const mainWrapper = {
  // alignItems: "center",
  display: "flex",
  flexDirection: "column",
  flex: "1",
  // overflow: "scroll",
  // position: "relative",
};

export default Home;

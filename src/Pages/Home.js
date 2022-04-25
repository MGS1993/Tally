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
      <TallyDisplay
        data={data}
        currentUser={currentUser.userName}
        linkedUser={linkedUser?.userName}
      />

      <TallyList data={data} userId={currentUser._id} setData={setData} />
    </StyledPage>
  );
};

export default Home;

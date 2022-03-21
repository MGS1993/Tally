import React, { useContext } from "react";

import AuthContext from "../auth/context";
import TallyDisplay from "../components/TallyDisplay";
import TallyList from "../components/TallyList";

const Home = ({ data, setData }) => {
  const authContext = useContext(AuthContext);
  return (
    <div style={mainWrapper}>
      <TallyDisplay data={data} userName={authContext?.user.userName} />

      <TallyList
        data={data}
        userId={authContext?.user._id}
        userName={authContext?.user.userName}
        setData={setData}
      />
    </div>
  );
};

const mainWrapper = {
  display: "flex",
  flexDirection: "column",
  flex: "1",
};

export default Home;

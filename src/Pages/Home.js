import React, { useContext } from "react";

import AuthContext from "../auth/context";
import TallyDisplay from "../components/TallyDisplay";
import TallyExpense from "../components/TallyExpense";

const Home = ({ data }) => {
  const authContext = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("user");
    authContext.setUser(null);
  };
  return (
    <div style={mainWrapper}>
      <TallyDisplay data={data} />
      <button style={tempButton} onClick={() => logout()}>
        test
      </button>
      <TallyExpense />
    </div>
  );
};

const mainWrapper = {
  display: "flex",
  flexDirection: "column",
};

const tempButton = {
  height: "25px",
  width: "30vw",
  margin: "25px",
};

export default Home;

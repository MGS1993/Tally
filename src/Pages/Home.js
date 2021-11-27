import React, { useContext, useEffect } from "react";

import AuthContext from "../auth/context";
import { getExpenses } from "../util/getExpenses";
import TallyDisplay from "../components/TallyDisplay";
import TallyList from "../components/TallyList";
import useApi from "../hooks/useApi";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { data, setData, request: getExpenseData } = useApi(getExpenses);

  useEffect(() => {
    getExpenseData(authContext?.user._id);
  }, [data]);

  const logout = () => {
    localStorage.removeItem("user");
    authContext.setUser(null);
  };
  return (
    <div style={mainWrapper}>
      <TallyDisplay data={data} />
      {/* <button onClick={() => logout()}>logout</button> */}

      <TallyList quantity={8} />
    </div>
  );
};

const mainWrapper = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

const tempButton = {
  height: "25px",
  width: "30vw",
  margin: "25px",
};

export default Home;

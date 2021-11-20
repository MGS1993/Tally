import React, { useState, useEffect } from "react";
import ReactRouter from "./ReactRoutes";
import "./App.css";

import AuthContext from "./auth/context";
import LoginPage from "./Pages/LoginPage";
// import useApi from "./hooks/useApi";

// import { getExpenses } from "./util/getExpenses";

function App() {
  const [user, setUser] = useState();
  // const { data, error, loading, request: getExpenseData } = useApi(getExpenses);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  // useEffect(() => {
  //   getExpenseData(user?._id);
  // }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">{user ? <ReactRouter /> : <LoginPage />}</div>
    </AuthContext.Provider>
  );
}

export default App;

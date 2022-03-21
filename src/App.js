import React, { useState, useEffect } from "react";
import ReactRouter from "./ReactRoutes";
import "./App.css";

import AuthContext from "./auth/context";
import LoginPage from "./Pages/LoginPage";
import useApi from "./hooks/useApi";
import getLinkedUsers from "./util/getUsers";

function App() {
  const [user, setUser] = useState();

  const { data: linkedUsers, request: getUsers } = useApi(getLinkedUsers);
  const loggedInUser = localStorage.getItem("user");
  const parsedUser = JSON.parse(loggedInUser);

  useEffect(() => {
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      getUsers(parsedUser._id);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, linkedUsers }}>
      <div className="App">{user ? <ReactRouter /> : <LoginPage />}</div>
    </AuthContext.Provider>
  );
}

export default App;

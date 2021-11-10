import React, { useState, useEffect } from "react";
import ReactRouter from "./ReactRoutes";
import "./App.css";

import AuthContext from "./auth/context";
import LoginPage from "./Pages/LoginPage";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      // console.log(foundUser, "user found");
      setUser(foundUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">{user ? <ReactRouter /> : <LoginPage />}</div>
    </AuthContext.Provider>
  );
}

export default App;

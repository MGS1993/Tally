import React, { useState, useEffect } from "react";
import ReactRouter from "./ReactRoutes";
import "./App.css";

import AuthContext from "./auth/context";
import { getExpenses } from "./util/getExpenses";
import LoginPage from "./Pages/LoginPage";
import useApi from "./hooks/useApi";

function App() {
  const [user, setUser] = useState();
  const {
    data,
    setData,
    error,
    loading,
    request: getExpenseData,
  } = useApi(getExpenses);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    console.log("useEffect called");
    getExpenseData(user?._id);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, data, setData }}>
      <div className="App">
        {user ? <ReactRouter data={data} /> : <LoginPage />}
      </div>
    </AuthContext.Provider>
  );
}

export default App;

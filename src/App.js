import React, { useState } from "react";
import ReactRouter from "./ReactRoutes";
import "./App.css";

import AuthContext from "./auth/context";
import LoginPage from "./Pages/LoginPage";

function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">{user ? <ReactRouter /> : <LoginPage />}</div>
    </AuthContext.Provider>
  );
}

export default App;

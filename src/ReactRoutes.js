import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthContext from "./auth/context";
import Header from "./components/Header";
import Home from "./Pages/Home";
import History from "./Pages/History";
import NavFooter from "./components/NavFooter";
import useApi from "./hooks/useApi";
import { getExpenses } from "./util/getExpenses";
import getLinkedUsers from "./util/getUsers";
import { retrieveLinkedUser } from "./util/arrayManipulation";

const ReactRouter = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const userContext = useContext(AuthContext);

  const { data, setData, request: getExpenseData } = useApi(getExpenses);
  const { data: linkedUsers, request: getUsers } = useApi(getLinkedUsers);

  //Other user retrieved from linkedUsers object array
  const linkedUser = retrieveLinkedUser(userContext.user._id, linkedUsers);
  useEffect(() => {
    getExpenseData(userContext?.user._id);
    getUsers(userContext?.user._id);
    // eslint-disable-next-line
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              setData={setData}
              currentUser={userContext?.user}
              linkedUser={linkedUser}
            />
          }
        />
        <Route
          path="/history"
          element={<History currentUser={userContext?.user} />}
        />
      </Routes>
      <NavFooter
        //Drill prop to Menu.js
        linkedUsers={linkedUsers}
        clicked={() => setMenuToggle(!menuToggle)}
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
        setData={setData}
      />
    </BrowserRouter>
  );
};

export default ReactRouter;

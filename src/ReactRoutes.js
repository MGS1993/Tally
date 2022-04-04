import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthContext from "./contextApi/context";
import MenuContext from "./contextApi/menuContext";
import Header from "./components/Header";
import Home from "./Pages/Home";
import History from "./Pages/History";
import NavFooter from "./components/NavFooter";
import Scheduler from "./Pages/Scheduler";
import useApi from "./hooks/useApi";
import { getExpenses } from "./util/getExpenses";
import getLinkedUsers from "./util/getUsers";
import { retrieveLinkedUser } from "./util/arrayManipulation";

const ReactRouter = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [schedulerToggle, setSchedulerToggle] = useState(false);
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
  console.log("react router rendered...");
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
          element={
            <History currentUser={userContext?.user} linkedUser={linkedUser} />
          }
        />
        <Route
          path="/scheduler"
          element={
            <Scheduler
              currentUser={userContext?.user}
              linkedUser={linkedUser}
            />
          }
        />
      </Routes>
      <MenuContext.Provider value={{ menuToggle, setMenuToggle, setData }}>
        <NavFooter
          currentUser={userContext?.user}
          linkedUsers={linkedUsers}
          clicked={() => setMenuToggle(!menuToggle)}
          menuToggle={menuToggle}
          schedulerToggle={schedulerToggle}
          setSchedulerToggle={setSchedulerToggle}
        />
      </MenuContext.Provider>
    </BrowserRouter>
  );
};

export default ReactRouter;

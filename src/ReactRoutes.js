import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthContext from "./auth/context";
import Header from "./components/Header";
import Home from "./Pages/Home";
import History from "./Pages/History";
import NavFooter from "./components/NavFooter";
import useApi from "./hooks/useApi";
import { getExpenses } from "./util/getExpenses";
import getUsers from "./util/getUsers";

const ReactRouter = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const userContext = useContext(AuthContext);

  const { data, setData, request: getExpenseData } = useApi(getExpenses);
  const { data: allUsers, request: getAllUsers } = useApi(getUsers);

  useEffect(() => {
    getExpenseData(userContext?.user._id);
    getAllUsers();
    // eslint-disable-next-line
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <NavFooter
        //Drill prop to Menu.js
        allUsers={allUsers}
        clicked={() => setMenuToggle(!menuToggle)}
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
        setData={setData}
      />
    </BrowserRouter>
  );
};

export default ReactRouter;

import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthContext from "./auth/context";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Menu from "./components/Menu";
import NavFooter from "./components/NavFooter";
import useApi from "./hooks/useApi";
import { getExpenses } from "./util/getExpenses";

const ReactRouter = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const userContext = useContext(AuthContext);

  const { data, setData, request: getExpenseData } = useApi(getExpenses);

  useEffect(() => {
    getExpenseData(userContext?.user._id);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
      </Routes>
      <NavFooter clicked={() => setMenuToggle(!menuToggle)} />
      {menuToggle ? (
        <Menu setData={setData} style={{ height: "35vh", bottom: "60px" }} />
      ) : (
        <Menu />
      )}
    </BrowserRouter>
  );
};

export default ReactRouter;

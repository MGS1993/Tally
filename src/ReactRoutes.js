import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthContext from "./auth/context";
import Header from "./components/Header";
import Home from "./Pages/Home";
import NavFooter from "./components/NavFooter";
import useApi from "./hooks/useApi";
import { getExpenses } from "./util/getExpenses";

const ReactRouter = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const userContext = useContext(AuthContext);

  const { data, setData, request: getExpenseData } = useApi(getExpenses);

  useEffect(() => {
    getExpenseData(userContext?.user._id);
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
      </Routes>
      <NavFooter
        clicked={() => setMenuToggle(!menuToggle)}
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
        setData={setData}
      />
    </BrowserRouter>
  );
};

export default ReactRouter;

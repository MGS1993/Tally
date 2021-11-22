import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./Pages/Home";
import Menu from "./components/Menu";
import NavFooter from "./components/NavFooter";

const ReactRouter = ({ data }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
      </Routes>
      <NavFooter clicked={() => setMenuToggle(!menuToggle)} />
      {menuToggle ? (
        <Menu style={{ height: "35vh", bottom: "60px" }} />
      ) : (
        <Menu />
      )}
    </BrowserRouter>
  );
};

export default ReactRouter;

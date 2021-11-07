import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./Pages/Home";
import NavFooter from "./components/NavFooter";

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <NavFooter />
    </BrowserRouter>
  );
};

export default ReactRouter;

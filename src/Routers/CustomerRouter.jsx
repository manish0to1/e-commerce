import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./customer/components/Navigation/Navigation.jsx";

import HomePage from "../customer/Pages/HomePage/HomePage";
import Cart from "./customer/components/Cart/Cart.jsx";

const CustomerRouter = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};

export default CustomerRouter;

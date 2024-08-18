import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/Pages/HomePage/HomePage";
import Product from "../customer/components/Product/Product";

const CustomerRouter = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/" element={<Product />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default CustomerRouter;

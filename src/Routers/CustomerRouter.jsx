import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/Pages/HomePage/HomePage";

const CustomerRouter = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default CustomerRouter;

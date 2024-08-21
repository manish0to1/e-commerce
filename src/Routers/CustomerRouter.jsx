import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../customer/Pages/HomePage/HomePage";
import Navigation from "../customer/components/Navigation/Navigation.jsx";
import Cart from "../customer/components/Cart/Cart.jsx";
import Product from "../customer/components/Product/Product.jsx";

const CustomerRouter = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>

        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <OrderPage /> */}
      </Routes>
    </div>
  );
};

export default CustomerRouter;

import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../customer/Pages/HomePage/HomePage";
import Navigation from "../customer/components/Navigation/Navigation.jsx";
import Cart from "../customer/components/Cart/Cart.jsx";
import Product from "../customer/components/Product/Product.jsx";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails.jsx";
import Checkout from "../customer/components/Checkout/Checkout.jsx";

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

        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>

        {/* <OrderPage /> */}
      </Routes>
    </div>
  );
};

export default CustomerRouter;

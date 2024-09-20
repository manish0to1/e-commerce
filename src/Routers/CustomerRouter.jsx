import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../customer/Pages/HomePage/HomePage";
import Navigation from "../customer/components/Navigation/Navigation.jsx";
import Cart from "../customer/components/Cart/Cart.jsx";
import Product from "../customer/components/Product/Product.jsx";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails.jsx";
import Checkout from "../customer/components/Checkout/Checkout.jsx";
import OrderPage from "../customer/components/Order/OrderPage.jsx";
import OrderDetails from "../customer/components/Order/OrderDetails.jsx";

const CustomerRouter = () => {
  return ( 
    <div>
      <div>
        <Navigation />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />}></Route>

        <Route path="/product/:productId" element={<ProductDetails />}></Route>

        <Route path="/checkout" element={<Checkout />}></Route>

        <Route path="/account/order" element={<OrderPage />}></Route>

        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
    
        {/* <Navigation /> */}
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <OrderPage /> */}
        {/* <OrderDetails /> */}
      </Routes>
    </div>
  );
};

export default CustomerRouter;

import "./App.css";
// import Navigation from "./customer/components/Navigation/Navigation.jsx";
// import HomePage from "./customer/Pages/HomePage/HomePage";
// import Product from "./customer/components/Product/Product.jsx";
// import ProductDetails from "./customer/components/ProductDetails/ProductDetails.jsx";
// import Cart from "./customer/components/Cart/Cart.jsx";
// import Checkout from "./customer/components/Checkout/Checkout.jsx";
// import OrderPage from "./customer/components/Order/OrderPage.jsx";
// import OrderDetails from "./customer/components/Order/OrderDetails.jsx";
import Footer from "./customer/components/Footer/Footer";
import CustomerRouter from "./Routers/CustomerRouter.jsx";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouter />}></Route>
      </Routes>
      {/* <div>
        <Navigation />
      </div> */}
      {/* <HomePage /> */}
      {/* <Product /> */}
      {/* <ProductDetails /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      {/* <OrderPage /> */}
      {/* <OrderDetails /> */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

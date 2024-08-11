import "./App.css";
// import Checkout from "./customer/components/Checkout/Checkout.jsx";
// import Cart from "./customer/components/Cart/Cart.jsx";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
// import Product from "./customer/components/Product/Product.jsx";
// import ProductDetails from "./customer/components/ProductDetails/ProductDetails.jsx";
// import HomePage from "./customer/Pages/HomePage/HomePage";
import OrderPage from "./customer/components/Order/OrderPage.jsx";

function App() {
  return (
    <div className="">
      <div>
        <Navigation />
      </div>
      {/* <HomePage /> */}
      {/* <Product /> */}
      {/* <ProductDetails /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      <OrderPage />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

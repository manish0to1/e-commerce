import "./App.css";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import Product from "./customer/components/Product/Product.jsx";
// import HomePage from "./customer/Pages/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <div>
        <Navigation />
      </div>
      {/* <HomePage /> */}
      <Product />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

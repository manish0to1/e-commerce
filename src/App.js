import "./App.css";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/Pages/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <div>
        <Navigation />
      </div>
      <HomePage />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

import "./App.css"; 
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/Pages/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <div>
        <Navigation />
      </div>
      <HomePage/>
    </div>
  );
}

export default App;

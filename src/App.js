import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Restaurants from "./Components/Restaurants";
function App() {
  return (
    <Router>
      {/* <div className="App">
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
      </div> */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/restaurants" element={<Restaurants />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

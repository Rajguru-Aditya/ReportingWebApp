import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateDashboard from "./StateDashboard/StateDashboard";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StateDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateDashboard from "./StateDashboard/StateDashboard";
import ATCDashboard from "./ATCDashboard/ATCDashboard";
import PODashboard from "./PODashboard/PODashboard";
import SchoolDashboard from "./SchoolDashboard/SchoolDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StateDashboard />} />
          <Route path="/atc/" element={<ATCDashboard />} />
          <Route path="/atc/po" element={<PODashboard />} />
          <Route path="/atc/po/school/:name" element={<SchoolDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

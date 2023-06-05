import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateDashboard from "./StateDashboard/StateDashboard";
import ATCDashboard from "./ATCDashboard/ATCDashboard";
import PODashboard from "./PODashboard/PODashboard";
import SchoolDashboard from "./SchoolDashboard/SchoolDashboard";
import Login from "./Login/Login";
import OTP from "./Login/OTP";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/dashboard" element={<StateDashboard />} />
          <Route path="/dashboard/atc/" element={<ATCDashboard />} />
          <Route path="/dashboard/atc/po" element={<PODashboard />} />
          <Route
            path="/dashboard/atc/po/school/:name"
            element={<SchoolDashboard />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

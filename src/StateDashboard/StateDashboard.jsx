import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const StateDashboard = () => {
  const ATCList = [
    {
      name: "Nagpur",
      pos: 1,
    },
    {
      name: "Thane",
      pos: 2,
    },
    {
      name: "Amravati",
      pos: 2,
    },
    {
      name: "Nashik",
      pos: 1,
    },
  ];

  let navigate = useNavigate();

  return (
    <div id="dashboard-container">
      <Navbar title="State" />
      <div id="dashboard-title-container">
        <p id="dashboard-title">ATCs under you</p>
        <p id="dashboard-subtitle">Below is the list of ATCs assigned to you</p>
      </div>
      <div id="dashboard-content-list-container">
        <div id="dashboard-content-list">
          {ATCList.map((atc, index) => (
            <div
              id="dashboard-content-list-item"
              key={index}
              onClick={() => {
                navigate("/dashboard/atc");
              }}
            >
              <div id="dashboard-content-list-item-number-container">
                <p id="dashboard-content-list-item-number">{index + 1}</p>
              </div>
              <div id="dashboard-content-list-item-text-container">
                <p id="dashboard-content-list-item-title">{atc.name}</p>
                <p id="dashboard-content-list-item-subtitle">
                  No.of POs :- {atc.pos}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StateDashboard;

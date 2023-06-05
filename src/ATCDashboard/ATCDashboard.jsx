import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const ATCDashboard = () => {
  const POSList = [
    {
      name: "Nagpur 1",
      schools: 1,
    },
    {
      name: "Nagpur 2",
      schools: 2,
    },
  ];

  let navigate = useNavigate();

  return (
    <div id="dashboard-container">
      <Navbar title="ATC" />
      <div id="dashboard-title-container">
        <p id="dashboard-title">PO's under you</p>
        <p id="dashboard-subtitle">Below is the list of PO's assigned to you</p>
      </div>
      <div id="dashboard-content-list-container">
        <div id="dashboard-content-list">
          {POSList.map((po, index) => (
            <div
              id="dashboard-content-list-item"
              key={index}
              onClick={() => {
                navigate("/atc/po");
              }}
            >
              <div id="dashboard-content-list-item-number-container">
                <p id="dashboard-content-list-item-number">{index + 1}</p>
              </div>
              <div id="dashboard-content-list-item-text-container">
                <p id="dashboard-content-list-item-title">{po.name}</p>
                <p id="dashboard-content-list-item-subtitle">
                  No.of Schools :- {po.schools}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ATCDashboard;

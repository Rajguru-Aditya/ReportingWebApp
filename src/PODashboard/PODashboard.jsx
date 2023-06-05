import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const PODashboard = () => {
  const SchoolList = [
    {
      name: "Boripada",
      students: 221,
    },
    {
      name: "Rayate",
      students: 233,
    },
    {
      name: "Tanapada",
      students: 250,
    },
    {
      name: "Torangan",
      students: 190,
    },
  ];

  let navigate = useNavigate();

  return (
    <div id="dashboard-container">
      <Navbar />
      <div id="dashboard-title-container">
        <p id="dashboard-title">Schools under you</p>
        <p id="dashboard-subtitle">
          Below is the list of Schools assigned to you
        </p>
      </div>
      <div id="dashboard-content-list-container">
        <div id="dashboard-content-list">
          {SchoolList.map((school, index) => (
            <div
              id="dashboard-content-list-item"
              key={index}
              onClick={() => {
                navigate(`/atc/po/school/${school.name}`);
              }}
            >
              <div id="dashboard-content-list-item-number-container">
                <p id="dashboard-content-list-item-number">{index + 1}</p>
              </div>
              <div id="dashboard-content-list-item-text-container">
                <p id="dashboard-content-list-item-title">{school.name}</p>
                <p id="dashboard-content-list-item-subtitle">
                  No.of Students :- {school.students}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PODashboard;

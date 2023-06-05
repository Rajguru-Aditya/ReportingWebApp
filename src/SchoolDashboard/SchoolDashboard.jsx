import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import { ArrowBack, DataUsage } from "@mui/icons-material";

const SchoolDashboard = () => {
  // get url query

  let { name } = useParams();

  return (
    <div id="school-dashboard-container">
      <div id="school-dashboard-header-container">
        <ArrowBack id="school-dashboard-header-title-back" />
        <p id="school-dashboard-header-title">{name} Dashboard</p>
        <DataUsage id="school-dashboard-header-title-data" />
      </div>
      <div id="school-dashboard-items">
        {/* Quick Picks */}
        <div id="school-dashboard-item">
          <p id="school-dashboard-item-title">Dashboard Quick picks</p>
          <div id="school-dashboard-items-list">
            <div id="school-dashboard-items-list-item">
              <p id="school-dashboard-item-list-item-number">250</p>
              <p id="school-dashboard-items-list-item-title">Students</p>
            </div>
            <div id="school-dashboard-items-list-item">
              <p id="school-dashboard-item-list-item-number">5</p>
              <p id="school-dashboard-items-list-item-title">Teachers</p>
            </div>
            <div id="school-dashboard-items-list-item">
              <p id="school-dashboard-item-list-item-number">5</p>
              <p id="school-dashboard-items-list-item-title">Buddies</p>
            </div>
          </div>
        </div>
        {/* Pending Approvals */}
        <div id="school-dashboard-item">
          <p id="school-dashboard-item-title">Pending for Approval - School</p>
          <div id="school-dashboard-items-list">
            <div id="school-dashboard-items-list-item">
              <p id="school-dashboard-item-list-item-number">250</p>
              <p id="school-dashboard-items-list-item-title">Attendance</p>
            </div>
            <div id="school-dashboard-items-list-item">
              <p id="school-dashboard-item-list-item-number">5</p>
              <p id="school-dashboard-items-list-item-title">Worksheet/Exam</p>
            </div>
            <div id="school-dashboard-items-list-item">
              <p id="school-dashboard-item-list-item-number">5</p>
              <p id="school-dashboard-items-list-item-title">PD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboard;

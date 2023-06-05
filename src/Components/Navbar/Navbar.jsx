import React from "react";
import "./styles.css";
import { Menu } from "@mui/icons-material/";

const Navbar = ({ title }) => {
  return (
    <div id="navbar-container">
      <div id="navbar-menu">
        <Menu />
      </div>
      <p id="navbar-title">{title} Dashboard</p>
    </div>
  );
};

export default Navbar;

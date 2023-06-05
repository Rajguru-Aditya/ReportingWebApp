import React, { useState } from "react";
import "./styles.css";
import { Phone } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  let navigate = useNavigate();

  const onPressLogin = () => {
    console.log("Login Pressed", phone);
    navigate("/otp", { state: { phone } });
  };

  return (
    <div id="login-page">
      <div id="login-header">
        <p id="login-header-text">Hey there,</p>
        <p id="login-header-text">Login to continue</p>
      </div>
      <div id="login-input-container">
        <Phone id="phone-icon" />
        <input
          id="login-input"
          placeholder="Enter your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <p id="login-text">
        By Signing in, I accept the
        <span id="login-terms"> Terms & Conditions</span>
      </p>
      <button id="login-button" onClick={onPressLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;

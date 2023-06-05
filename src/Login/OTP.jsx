import React, { useState } from "react";
import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";

const OTP = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const onPressLogin = () => {
    console.log("OTP verified", otp);
    navigate("/dashboard");
  };

  return (
    <div id="login-page">
      <div id="login-header">
        <p id="login-header-text">Hey there,</p>
        <p id="login-header-text">
          Enter the OTP received on{" "}
          <span id="phone-number">+91{location.state.phone}</span>
        </p>
      </div>
      <HStack>
        <PinInput
          id="otp-input-container"
          placeholder=""
          value={otp}
          onChange={(e) => setOtp(e)}
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <button
        id="otp-button"
        onClick={onPressLogin}
        disabled={otp.length !== 4}
      >
        Verify & Login
      </button>
      <p id="login-text-time">
        Wait for otp: <span id="login-terms"> 00:30</span>
      </p>
      <p id="login-text">
        By Signing in, I accept the
        <span id="login-terms"> Terms & Conditions</span>
      </p>
    </div>
  );
};

export default OTP;

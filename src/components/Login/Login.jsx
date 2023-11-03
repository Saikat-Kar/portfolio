import React, { useState } from "react";
import "./Login.css";
import { Button, Typography } from "@mui/material";
import { Password } from "@mui/icons-material";

const Login = () => {
  const submitHandler = (e) => {
    e.prevenDefault();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="loginContainer">
        <form action="" className="loginForm" onSubmit={submitHandler}>
          <Typography variant="h4">
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </Typography>

          <div>
            <input
              type="email"
              required
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              required
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" variant="contained">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

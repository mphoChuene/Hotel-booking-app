import React, { useState } from "react";
import { Auth } from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {};

  const logout = async () => {};
  return (
    <>
      <div className="login-page">
        <div className="form">
          <h3>Login</h3>
          <form className="login-form">
            <input
              type="email"
              placeholder="email"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
            <button>login</button>
            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

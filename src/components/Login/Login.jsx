import React, { useState } from "react";
// import { unstable_HistoryRouter, Link } from "react-router-dom";
import { auth } from "../../firebase-config";
import "./Login.css";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const history = useHstory();
  const homePage = () => {
    history.push("./home");
  };
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
            <button onClick={homePage}>login</button>
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

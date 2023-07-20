import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const navigate = useNavigate();
  const [loginPassword, setLoginPassword] = useState("");

  const Signin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      if (user.user.email === "admin@gmail.com") {
        navigate("/admin");
      } else {
        navigate("/hotel");
      }
    } catch (error) {
      console.log(error.message);
    }
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
            <button onClick={Signin}>Login</button>
            <p className="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
            <p className="message">
              forgot password? <a href="/forgotpassword">reset you password</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import { auth } from "../../firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import "../Login/Login.css";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});

  const registration = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="login-page">
        <div className="form">
          <h3>Registration</h3>
          <form className="login-form">
            <input
              type="email"
              placeholder="email"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
            <button onClick={registration}>Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

import React, { useState } from "react";
import { auth } from "../../firebase-config.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../Login/Login.css";

const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState("");

const registration = async () => {
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

const Register = () => {
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

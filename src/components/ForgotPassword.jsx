import React, { useState } from "react";
import "./Login/Login.css";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="login-page">
        <div className="form">
          <h3>Forgot Password</h3>
          <form className="login-form">
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="button" onClick={resetPassword}>
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

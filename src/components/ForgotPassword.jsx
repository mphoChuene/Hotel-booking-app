import React, { useState } from "react";
import "./Login/Login.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();

  sendPasswordResetEmail(auth, email).then(()=>{alert('password reset email sent')}).catch(
    (error) => {
        const errorCode = error.code;
        const errorMessage = error.message
    }
  )

  return (
    <>
      <div className="login-page">
        <div className="form">
          <h3>forgot password</h3>
          <form className="login-form">
            <input type="email" placeholder="email" onChange={event.target.value}/>
            <button type="button" onClick={sendPasswordResetEmail}>
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

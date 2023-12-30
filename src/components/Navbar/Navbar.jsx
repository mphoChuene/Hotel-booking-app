import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import { auth } from "../../firebase-config";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/");
    });
  };

  return (
    <header className={styles.navbar}>
      <h2>
        <strong>Whiteman Lodge</strong>{" "}
      </h2>
      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }>
          <li>
            <a href="#">Home</a>
          </li>
          {currentUser ? (
            <>
              <li>
                <a href="#">
                  <AiOutlineUser /> : {currentUser.email}
                </a>
              </li>
              <li>
                <Link to={"/"} onClick={handleLogout}>
                  <a>Logout</a>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to={"/login"}>
                <a>Login</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>
  );
};

export default Navbar;

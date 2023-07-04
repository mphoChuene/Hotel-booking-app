import { React, useState } from "react";
import styles from "./Navbar.module.css";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { auth } from "../../firebase-config";

const Navbar = () => {
  const [nav, setNav] = useState(false);
 

  return (
    <header className={styles.navbar}>
      <h2>
        <strong>Whiteman Lodge</strong>{" "}
      </h2>
      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Login</a>
          </li>
          <li>
            <a href="/#">Register</a>
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>
  );
};

export default Navbar;

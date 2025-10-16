import React from "react";
import styles from "./NavBar.module.css"

import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MySite</div>
      <ul  className={styles["nav-links"]}>
         <li><Link to="/">HOME</Link></li>
         <li><Link to="/movies">MOVIES</Link></li>
         <li><Link to="/register">REGISTER</Link></li>
         <li><Link to="/dashboard">DASHBOARD</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
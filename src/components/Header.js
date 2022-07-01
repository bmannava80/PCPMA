import React from "react";
import styles from "../styles/header.module.scss";
import logo from "../assets/images/apphead_logo.gif";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="Delta Dental" />
        </div>
        <div className={styles.title}>
          <span>PCPMA</span>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Header;

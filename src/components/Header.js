import React from "react";
import styles from "../styles/header.module.scss";
import logo from "../assets/images/apphead_logo.gif";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to={"/"}>
          <div className={styles.logo}>
            <img src={logo} alt="Delta Dental" />
          </div>
        </Link>
        <div className={styles.title}>
          <span>PCPMA</span>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Header;

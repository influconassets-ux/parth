import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.topMid}>
          <Link to={"/"}>
            <img src="/images/logo.png" className={styles.logoImage} alt="" />
          </Link>
          <div className={styles.headerContainer}>
            <h2 className={styles.header}>
              Parth Electricals & Engineering Limited
            </h2>
            <h3 className={styles.subHeader}>
              (Formerly known as Parth Electricals & Engineering Pvt. Ltd.)
            </h3>
          </div>
        </div>

        <Link to={"/contact-us"} className={styles.btn}>
          <p className={`${styles.btnText} transition`}>Request a Service</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

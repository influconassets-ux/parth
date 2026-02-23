import React, { useEffect, useState } from "react";
import styles from "./Navitems.module.css";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Navitems = ({ changeBg }) => {
  return (
    <div className={styles.container}>
      <motion.nav
        className={
          changeBg
            ? `${styles.heroNav} ${styles.changeBg}`
            : `${styles.heroNav}  ${styles.changeBg}`
        }
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Link
          className={styles.item}
          to={"/"}
          style={{
            borderBottom: location.pathname === "/" ? "2px solid red" : "",
          }}
        >
          Home
        </Link>
        <Link
          className={styles.item}
          to={"/about-us"}
          style={{
            borderBottom:
              location.pathname === "/about-us" ? "2px solid red" : "",
          }}
        >
          About Us
        </Link>
        <Link
          className={styles.item}
          to={"/products"}
          style={{
            borderBottom:
              location.pathname === "/products" ? "2px solid red" : "",
          }}
        >
          Products
        </Link>
        <Link
          className={styles.item}
          style={{
            borderBottom:
              location.pathname === "/services" ? "2px solid red" : "",
          }}
          to={"/services"}
        >
          Services
        </Link>
        <Link
          className={styles.item}
          style={{
            borderBottom:
              location.pathname === "/epc-projects" ? "2px solid red" : "",
          }}
          to={"/epc-projects"}
        >
          EPC Projects
        </Link>
        <Link
          className={styles.item}
          style={{
            borderBottom:
              location.pathname === "/certifications" ? "2px solid red" : "",
          }}
          to={"/certifications"}
        >
          Certifications
        </Link>
        <Link
          to={"/technology-transfer-agreements"}
          style={{
            borderBottom:
              location.pathname === "/technology-transfer-agreements"
                ? "2px solid red"
                : "",
          }}
          className={styles.item}
        >
          Technology Transfer
        </Link>
        <Link
          to={"/media-mentions"}
          style={{
            borderBottom:
              location.pathname === "/media-mentions" ? "2px solid red" : "",
          }}
          className={styles.item}
        >
          Media Mentions
        </Link>
        <Link
          to={"/investor-relations"}
          style={{
            borderBottom:
              location.pathname === "/investor-relations"
                ? "2px solid red"
                : location.pathname === "/ipo"
                ? "2px solid red"
                : location.pathname === "/financial-reporting"
                ? "2px solid red"
                : "",
          }}
          className={styles.item}
        >
          Investor Relations
        </Link>
        <Link
          className={styles.item}
          to={"/contact-us"}
          style={{
            borderBottom:
              location.pathname === "/contact-us" ? "2px solid red" : "",
          }}
        >
          Contact Us
        </Link>
      </motion.nav>
    </div>
  );
};

export default Navitems;

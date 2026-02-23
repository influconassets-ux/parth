import React from "react";
import styles from "./ServiceHero.module.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceHero = ({ header, startAnimation, bgImage }) => {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        style={
          bgImage
            ? { backgroundImage: `url(/images/newBgImages/${bgImage})` }
            : {
                backgroundColor: "#002582d5",
              }
        }
      >
        <motion.div
          initial={{ y: -100, opacity: 0, scale: 1 }}
          animate={
            startAnimation
              ? { y: 0, opacity: 1, scale: 1 }
              : { y: -100, opacity: 0, scale: 1 }
          }
          transition={{
            duration: 0.4, // faster animation
            ease: "easeOut", // smoother deceleration
            type: "tween",
          }}
          className={styles.mainContainer}
        >
          <h2 className={styles.header}>{header}</h2>
          {location.pathname === "/ipo" && (
            <h2 className={styles.header}>(IPO)</h2>
          )}
          {location.pathname === "/ipo-pdf" && (
            <h2 className={styles.header}>(IPO)</h2>
          )}
        </motion.div>
        <div className={styles.layout} />
      </div>
    </div>
  );
};

export default ServiceHero;

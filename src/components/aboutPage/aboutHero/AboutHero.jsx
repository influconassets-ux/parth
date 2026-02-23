import React from "react";
import styles from "./AboutHero.module.css";
import { Link, Links } from "react-router-dom";
import { motion } from "framer-motion";

const AboutHero = ({ startAnimation }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
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
          <h2 className={styles.header}>
            Welcome to <span>PARTH</span>
          </h2>
          <h3 className={styles.content}>
            Parth Electricals has been delivering quality products and services
            in the power sector since 2005. Starting as a service provider, we
            became a private limited company in 2007 and established a
            state-of-the-art manufacturing facility in 2009, equipped with
            advanced Japanese machinery and a modern powder coating plant by
            2010. With a strong team, robust infrastructure, and seamless
            coordination, we have consistently achieved key milestones,
            contributing to major installation, commissioning, and
            electrification projects across India.
            <br />
            <br />
            Our vision is to be a preferred and reliable supplier and service
            provider in power transmission and distribution. We continue to
            invest in expanding our product range and capabilities, committed to
            exceeding customer expectations and driving mutual growth.
          </h3>

          {/* <h2 className={`${styles.header} ${styles.header2}`}>
            Meet Our Directors
          </h2> */}

          {/* <div className={styles.imageContainer}>
            <img src="/images/Dir1.svg" className={styles.dirImage} alt="" />
            <img src="/images/Dir2.svg" className={styles.dirImage} alt="" />
          </div>

          <Link to={"/contact-us"} className={styles.btn}>
            <p className={`${styles.btnText} transition`}>Request a Service</p>
          </Link> */}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;

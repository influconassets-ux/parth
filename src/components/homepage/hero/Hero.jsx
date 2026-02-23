import React from "react";
import styles from "./Hero.module.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

const Hero = ({ startAnimation }) => {
  const location = useLocation();
  return (
    <motion.div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.vidContainer}>
          <video autoPlay muted loop playsInline className={styles.bgVid}>
            <source
              src="https://res.cloudinary.com/dqpefdyt3/video/upload/f_auto,q_auto/v1754387118/parthCropped_a1m3y2.mp4
"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <motion.div
          className={styles.mainContainer}
          initial={{ y: 25, opacity: 0 }}
          animate={
            startAnimation ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h2 className={styles.content}>
            A Renowned Manufacturer and Service Provider in the Electrical Power
            Transmission & Distribution space with in-house R&D and design
            capabilities.
          </h2>

          <Link to={"/contact-us"} className={styles.btn}>
            <p className={`${styles.btnText} transition`}>Request a Service</p>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;

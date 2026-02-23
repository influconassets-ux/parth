import React from "react";
import styles from "./SectionTwo.module.css";
import { motion } from "motion/react";

const SectionTwo = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.wrapper}
        initial={{ y: 25, opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
          },
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >
        <motion.div className={styles.left}>
          <a
            href="https://www.youtube.com/watch?v=QbLqVOC6vL0&ab_channel=parthrevan"
            target="_blank"
            className={styles.leftWrapper}
          >
            <img
              src="/images/sec2Image.jpg"
              alt=""
              className={styles.leftImage}
            />
            <img src="/images/ytImage.svg" className={styles.ytImage} alt="" />
          </a>
          <img src="/images/gpw.png" className={styles.gpwImageMob} alt="" />
        </motion.div>

        <div className={styles.right}>
          <motion.h2 className={styles.header}>
            See what we do here at <span>PARTH</span>
          </motion.h2>
          <h3 className={styles.subHeader}>
            Thanks to our incredible team, remarkable experiences, and a
            fantastic workplace culture, we have proudly achieved the Great
            Place To Work certification.
          </h3>

          <p className={styles.content}>
            Parth Electricals & Engineering Ltd. is a unique player in the field
            of Electrical Engineering, Design & manufacturing of MV Switchgear
            Panels, MV Busducts, Relay control panels, Special adaptors and
            Retrofit solutions etc. Parth is also pioneer in providing
            electrical field services involving Installation Testing &
            Commission of LV/MV/HV switchgears, Health checkup, Retrofitting,
            Thermography services, Insulation Enhancement services,
            Refurbishment services & Electrical project work etc.
          </p>
        </div>

        <img src="/images/gpw.png" className={styles.gpwImage} alt="" />
      </motion.div>

      <div className={`${styles.layout} ${styles.ltlayout}`}>
        <img
          src="/images/elipseLt.svg"
          className={styles.layoutImage}
          alt="elipse"
        />
      </div>
    </div>
  );
};

export default SectionTwo;

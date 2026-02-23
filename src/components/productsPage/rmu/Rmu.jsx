import React from "react";
import styles from "./Rmu.module.css";
import { motion } from "motion/react";

const Rmu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img
          src="/images/manproducts/img2.jpeg"
          className={styles.leftImage}
          alt=""
        />
        <h2 className={styles.imageHeader}>RMU</h2>
      </div>
      <div className={styles.right}>
        <h2 className={styles.rightHeader}>RMU</h2>

        <h3 className={styles.content}>
          <span>General Technical Data</span>
        </h3>
        <h3 className={styles.content}>Type : Outdoor Type RMUs</h3>
        <h3 className={styles.content}>Rated voltage : 12 kV/ 24 kV</h3>
        <h3 className={styles.content}>
          Operation voltage : <span>11 kV/ 22 kV</span>
        </h3>
        <h3 className={styles.content}>
          Rated lightning withstand voltage : 75 kV/ 125 kV
        </h3>
        <h3 className={styles.content}>
          Rated power-frequency withstand voltage : 28 kV, 1 Min / 50 kV, 1 Min
        </h3>
        <h3 className={styles.content}>Rated frequency : 50 Hz / 50 Hz</h3>
        <h3 className={styles.content}>
          Rated peak current : 50 kA peak / 50 kA peak
        </h3>
        <h3 className={styles.content}>
          Rated short-time current : 21 kA / 20 kA
        </h3>
        <h3 className={styles.content}>Rated short-time : 1 s / 3 s</h3>
        <h3 className={styles.content}>Basic Equipment</h3>
        <h3 className={styles.content}>
          Make : Schneider Electric Infrastructure Limited.{" "}
        </h3>
        <h3 className={styles.content}>Operation : Manual/Motorized. </h3>
        <h3 className={styles.content}>Operation : Manual/Motorized. </h3>
        <ul className={styles.listContainer}>
          <li className={styles.content}>Protection</li>
          <li className={styles.content}>
            Self-Powered O/C & E/F Protection with Schneider Electric DPX relay
            / C&S make CSDPR or CSPR relay with suitable protection CTs as per
            transformer rating
          </li>
        </ul>
        <h3 className={styles.content}>
          Rated Continuous current and breaking capacity
        </h3>
        <h3 className={styles.content}>Bus bars : 630 A. </h3>
        <h3 className={styles.content}>
          Vacuum Circuit Breaker :630 A (Fixed Type).{" "}
        </h3>
        <h3 className={styles.content}>Cable Size for: </h3>
        <h3 className={styles.content}>
          Vacuum Circuit Breaker : Up to 400 sq. mm 3 core.{" "}
        </h3>
        <h3 className={styles.content}>Class of Protection : </h3>
        <h3 className={styles.content}>SF6 Gas Tank - SS : IP 67 </h3>
        <h3 className={styles.content}>Front Cover : IP 2X </h3>
        <h3 className={styles.content}>Cable Cover : IP 3X </h3>
        <h3 className={styles.content}>Outdoor Enclosure : IP 54 </h3>
      </div>
    </div>
  );
};

export default Rmu;

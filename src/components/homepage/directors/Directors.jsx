import React from "react";
import styles from "./Directors.module.css";

const Directors = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Meet Our Directors</h2>

        <div className={styles.imgContainer}>
          <img src="/images/Dir1.svg" className={styles.dirImage} alt="" />
          <img src="/images/Dir2.svg" className={styles.dirImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Directors;

import React from "react";
import styles from "./OtherCards.module.css";
import { motion } from "motion/react";

const OtherCards = ({ data }) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ flexDirection: data.flexType == "row" ? "row" : "row-reverse" }}
    >
      <div className={styles.left}>
        <img src={data.imgLink} className={styles.leftImage} alt="" />
        <h2 className={styles.imageHeader}>{data.header}</h2>
      </div>
      <div className={styles.right}>
        <h2 className={styles.rightHeader}>{data.header}</h2>
        <h3 className={styles.content}>{data.content}</h3>

        <h3 className={`${styles.content} ${styles.ulheader}`}>
          Key Features:
        </h3>

        <ul className={styles.listContainer}>
          {data.points.map((val, i) => {
            return (
              <li className={styles.content} key={i}>
                {val}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default OtherCards;

import React from "react";
import styles from "./OtherCards.module.css";

const OtherCards = ({ data }) => {
  return (
    <div
      className={styles.container}
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
    </div>
  );
};

export default OtherCards;

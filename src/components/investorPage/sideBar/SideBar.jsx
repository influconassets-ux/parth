import React, { useState } from "react";
import styles from "./SideBar.module.css";

const SideBar = ({ data, handleHeaderChange, currentHeader }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Investor Relations</h2>

        <ul className={styles.listWrapper}>
          {data.map((val, i) => (
            <li
              className={`${styles.list} ${
                currentHeader.header === val.header ? styles.active : ""
              }`}
              onClick={() => handleHeaderChange(val)}
              key={i}
            >
              {val.header}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

import React from "react";
import styles from "./withImageLayout.module.css";
const withImageLayout = (WrappedComponent) => {
  return (props) => {
    return (
      <div className={styles.container}>
        <WrappedComponent {...props} />
        <div className={`${styles.ltlayout}`}>
          <img
            src="/images/elipseLt.svg"
            className={styles.layoutImage}
            alt="elipse"
          />
        </div>
        <div className={styles.rtLayout}>
          <img src="/images/swirlRt.svg" className={styles.ltImage} alt="" />
        </div>
      </div>
    );
  };
};

export default withImageLayout;

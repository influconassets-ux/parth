import styles from "./Life.module.css";
import { motion } from "motion/react";

const Life = () => {
  return (
    <div className={styles.container}>
      <motion.h2
        className={styles.header}
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
        Life at Parth
      </motion.h2>
      <motion.img
        initial={{ y: 25, opacity: 0, scale: 1.3 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
          },
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        src="/images/life.png"
        className={styles.lifeImage}
        alt=""
      />
      <div className={styles.ltLayout}>
        <img src="/images/zap.svg" className={styles.zImage} alt="" />
      </div>
      <div className={styles.rtLayout}>
        <img src="/images/swirlRt.svg" className={styles.ltImage} alt="" />
      </div>
    </div>
  );
};

export default Life;

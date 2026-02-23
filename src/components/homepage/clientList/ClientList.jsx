import React from "react";
import styles from "./ClientList.module.css";
import { motion } from "motion/react";

const ClientList = () => {
  return (
    <div className={styles.container}>
      <motion.h2
        initial={{ x: 25, opacity: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.7,
          },
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className={styles.header}
      >
        Client List
      </motion.h2>
      {/* <img
        src="/images/clientListImage.png"
        className={styles.clImage}
        alt=""
      /> */}

      <div className={styles.imgContainer}>
        <div className={styles.imgContent}>
          <img src="/images/clients/img1.jpg" alt="" />
          <img src="/images/clients/img2.png" alt="" />
          <img src="/images/clients/img3.png" alt="" />
          <img src="/images/clients/img4.png" alt="" />
          <img src="/images/clients/img5.png" alt="" />
          <img src="/images/clients/img6.png" alt="" />
          <img src="/images/clients/img7.jpeg" alt="" />
          <img src="/images/clients/img8.jpg" alt="" />
          <img src="/images/clients/img9.jpeg" alt="" />
          <img src="/images/clients/img10.png" alt="" />
          <img src="/images/clients/img1.jpg" alt="" />
          <img src="/images/clients/img2.png" alt="" />
          <img src="/images/clients/img3.png" alt="" />
          <img src="/images/clients/img4.png" alt="" />
          <img src="/images/clients/img5.png" alt="" />
          <img src="/images/clients/img6.png" alt="" />
          <img src="/images/clients/img7.jpeg" alt="" />
          <img src="/images/clients/img8.jpg" alt="" />
          <img src="/images/clients/img9.jpeg" alt="" />
          <img src="/images/clients/img10.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ClientList;

import React from "react";
import styles from "./TeamMembers.module.css";
import { motion } from "motion/react";

const TeamMembers = () => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          className={styles.card}
          key={i}
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
          <div className={styles.imgWrapper}>
            <img
              src="/images/dummy_member.jpg"
              loading="lazy"
              alt=""
              className={styles.image}
            />
          </div>
          <h2 className={styles.name}>Name of the Member</h2>
          <h2 className={styles.des}>Designation Name</h2>
        </motion.div>
      ))}
    </div>
  );
};

export default TeamMembers;

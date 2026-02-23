import React from "react";
import styles from "./Directors.module.css";
import { motion } from "motion/react";

const Directors = () => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.header}`}>Meet Our Directors</h2>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardAbs}></div>

          <motion.div
            className={styles.cardWrapper}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.8,
              },
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <div className={styles.cardLeft}>
              <img
                src="/images/dirNew1.png"
                className={styles.cardImage}
                alt=""
              />
            </div>
            <div className={styles.cardRight}>
              <h3 className={styles.name}>Mr. Jignesh Patel</h3>
              <h4 className={styles.des}>Managing Director</h4>

              <ul className={styles.listContainer}>
                <li className={styles.item}>
                  Mr. Jignesh Patel graduated from BVM Engineering College, SP
                  University, to pursue a Bachelors of Engineering (B.E.) in
                  electrical engineering technologies
                </li>
                <li className={styles.item}>
                  Post his graduation, Mr. Jignesh worked with Jyoti Ltd for a
                  year & with Siemens Ltd. for 10 years across divisions such as
                  Customer Services, Sales & Marketing, Project Execution
                </li>
                <li className={styles.item}>
                  Started entrepreneurial journey in 2005 as a service provider
                </li>
                <li className={styles.item}>
                  Mr. Jignesh possesses great management & execution skills. He
                  aspires to create many leaders across business verticals.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardAbs}></div>

          <motion.div
            className={styles.cardWrapper}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.8,
              },
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <div className={styles.cardRight}>
              <h3 className={styles.name}>Ms. Jemini Patel</h3>
              <h4 className={styles.des}>Whole Time Director</h4>

              <ul className={styles.listContainer}>
                <li className={styles.item}>
                  Mrs. Jemini Patel is a science graduate and has been working
                  in Parth Electricals since the first day of business.
                </li>
                <li className={styles.item}>
                  She has worked at all levels of the organization, starting
                  with General Administration, Commercial Offers, Accounts,
                  Project Management, before taking up the operations side of
                  the business since the last 5 years.
                </li>
                <li className={styles.item}>
                  She has now acquired all major skills including knowledge of
                  manufacturing productivity and processes and most importantly
                  people management skills.
                </li>
              </ul>
            </div>

            <div className={styles.cardLeft}>
              <img
                src="/images/dirNew2.png"
                className={styles.cardImage}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className={`${styles.ltlayout}`}>
        <img
          src="/images/elipseLt.svg"
          className={styles.layoutImage}
          alt="elipse"
        />
      </div>
      <div className={`${styles.rtlayout}`}>
        <img
          src="/images/elipseRt.svg"
          className={styles.layoutImage}
          alt="elipse"
        />
      </div>
    </div>
  );
};

export default Directors;

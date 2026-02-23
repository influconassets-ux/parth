import React from "react";
import styles from "./IndependendDirectors.module.css";

const IndependendDirectors = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dWrapper}>
        <h3 className={styles.name}>Mrs. Karuna Advani</h3>
        <h4 className={styles.des}>Independent Director</h4>

        <ul className={styles.listContainer}>
          <li className={styles.item}>
            Mrs. Karuna Vinod Advani, 50 years, is one of the Independent
            Directors of our Company. She is a law graduate and has been a
            practicing Company Secretary with since 2002.
          </li>
          <li className={styles.item}>
            She served as a Compliance Officer at Jindal Hotel Limited, Vadodara
            office, for about 13 years where she was responsible for promoting
            and maintaining highest standards of administrative processes and
            corporate governance.
          </li>
          <li className={styles.item}>
            She is experienced in providing corporate governance advisory and
            compliance support to diverse organizations with respect to
            regulatory compliance, board management, and corporate secretarial
            duties, adept at facilitating smooth operations and fostering legal
            compliance.
          </li>
        </ul>
      </div>
      <div className={styles.dWrapper}>
        <h3 className={styles.name}>Mr. Prashant Patel</h3>
        <h4 className={styles.des}>Independent Director</h4>

        <ul className={styles.listContainer}>
          <li className={styles.item}>
            Mr. Prashant Bharatkumar Patel, 44 years, is one of the Independent
            Directors of our Company. He is a commerce and law graduate, a
            member of the Institute of Company Secretaries of India, and an
            Insolvency Professional.
          </li>
          <li className={styles.item}>
            He has been practicing Company Secretary for 10 years and has over
            17 years of professional experience in providing corporate,
            secretarial & compliance advisory, due diligence, corporate
            restructuring and legal consultancy services (on corporate dispute
            resolution, capital markets laws, insolvency & bankruptcy matters)
            to large and medium-scale corporates.
          </li>
          <li className={styles.item}>
            He has been involved with the initial public offering of five
            companies- including three SMEs and two mainboards.
          </li>
        </ul>
      </div>
      <div className={styles.dWrapper}>
        <h3 className={styles.name}>Mr. Ravindra Badaya</h3>
        <h4 className={styles.des}>Independent Director</h4>

        <ul className={styles.listContainer}>
          <li className={styles.item}>
            Mr. Ravindra Badaya, 56 years, is one of the Independent Directors
            of our Company.
          </li>
          <li className={styles.item}>
            He is a distinguished Chartered Accountant with a wealth of
            experience in accounting, finance, auditing, taxation, and business
            advisory services and has been in practice as a Chartered Accountant
            since 1990.
          </li>
          <li className={styles.item}>
            He is also a qualified Company Secretary from Institute of Company
            Secretaries of India (ICSI). He has completed his B.Com. from
            University of Rajasthan and LLB from University Law College
            Rajasthan.
          </li>
          <li className={styles.item}>
            He has also been the Chairman of the Jaipur Branch of the Institute
            of Chartered Accountants of India (ICAI).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IndependendDirectors;

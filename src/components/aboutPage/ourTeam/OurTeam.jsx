import React from "react";
import styles from "./OurTeam.module.css";
import Counter from "../../counter/counter";
import TeamMembers from "../teamMembers/TeamMembers";

const OurTeam = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Our Team</h2>

      <h3 className={styles.subheader}>
        Team of {<Counter to={250} />} members
      </h3>
      <p className={styles.lcontent}>
        Our core team has an average of{" "}
        <span>{<Counter duration={1.8} to={20} />}+</span> years of relevant
        Industry experience & have been associated with Parth Electricals since{" "}
        <span>{<Counter duration={2} to={10} />}</span> years
      </p>
      {/* <TeamMembers /> */}
      <img
        src="/images/sec2Image.jpg"
        className={`${styles.teamImage} hover:shadow-md`}
        alt=""
      />

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

export default OurTeam;

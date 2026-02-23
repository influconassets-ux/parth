import React from "react";
import styles from "./EpcProject.module.css";
import { Link } from "react-router-dom";

const EpcProject = () => {
  const epcData = [
    {
      header: `33KV AIS Replaced with 33KV GIS at Essar Oil, Jamnagar Refinery (2011)`,
      imgLink: `/images/epcProjects/img1.jpeg`,
    },
    {
      header: `33KV GIS Installed & Commissioned at Tata Steel, Kalinga Nagar, Odisha`,
      imgLink: `/images/epcProjects/img2.jpeg`,
    },
    {
      header: `220KV GIS Installation on Terrace at 250MW Power plant in Mundra, Gujarat`,
      imgLink: `/images/epcProjects/img3.jpeg`,
    },
    {
      header: `220KV GIS Substation project executed as EPC in GETCO, Atul (2015)
`,
      imgLink: `/images/epcProjects/img4.jpeg`,
    },
    {
      header: `220KV GIS Installation with GIB Connection to Transformers at Tata Steel, Kalinga Nagar, Odisha
`,
      imgLink: `/images/epcProjects/img5.jpeg`,
    },
    {
      header: `220KV GIS Installation with GIB Connection to Transformers at Tata Steel, Kalinga Nagar, Odisha
`,
      imgLink: `/images/epcProjects/img6.jpeg`,
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Key EPC Projects</h2>
      <div className={styles.wrapper}>
        {epcData.map((val, i) => {
          return (
            <div className={styles.card} key={i}>
              <img src={val.imgLink} alt="" className={styles.cardImage} />
              <h2 className={styles.imgHeader}>
                <span>{val.header}</span>
              </h2>
            </div>
          );
        })}
      </div>
      <div className={styles.dotsContainer}>
        <img src="/images/dots3.svg" alt="" className={styles.dots} />
        <Link to={"/epc-projects"} className={styles.viewBtn}>
          <p className={styles.btnText}>View EPC Projects</p>
        </Link>
      </div>
    </div>
  );
};

export default EpcProject;

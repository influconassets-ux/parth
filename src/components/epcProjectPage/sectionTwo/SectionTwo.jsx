import React from "react";
import styles from "./SectionTwo.module.css";

const SectionTwo = () => {
  const epcData = [
    {
      imgLink: "/images/epcProjects/img1.jpeg",
      imgHeader:
        "33KV AIS Replaced with 33KV GIS at Essar Oil, Jamnagar Refinery (2011)",
      rightHeader: "Client: Essar Oil Limited",
      location: "Jamnagar Refinery, Gujarat",
      year: "2011",
    },
    {
      imgLink: "/images/epcProjects/img2.jpeg",
      imgHeader:
        "33KV GIS Installed & Commissioned at Tata Steel, Kalinga Nagar, Odisha",
      rightHeader: "Client: Tata Steel Limited",
      location: "Kalinga Nagar, Odisha",
      year: "",
    },
    {
      imgLink: "/images/epcProjects/img3.jpeg",
      imgHeader:
        "220KV GIS Installation on Terrace at 250MW Power plant in Mundra, Gujarat",
      rightHeader:
        "Project: 220kV GIS Installation on Terrace at 250MW Power Plant, Mundra, Gujarat",
      location: "Mundra, Gujarat",
      year: "",
    },
    {
      imgLink: "/images/epcProjects/img4.jpeg",
      imgHeader:
        "220KV GIS Substation project executed as EPC in GETCO, Atul (2015)",
      rightHeader: "Client: Gujarat Energy Transmission Corporation (GETCO)",
      location: "Atul, Gujarat",
      year: "2015",
    },
    {
      imgLink: "/images/epcProjects/img5.jpeg",
      imgHeader:
        "220KV GIS Installation with GIB Connection to Transformers at Tata Steel, Kalinga Nagar, Odisha",
      rightHeader: "Client: Tata Steel Limited",
      location: "Kalinga Nagar, Odisha",
      year: "",
    },
    {
      imgLink: "/images/epcProjects/img6.jpeg",
      imgHeader:
        "Precision Installation of GIS at IOCL-Panipat Refinery (2008 - 2009)",
      rightHeader: "Client: Indian Oil Corporation Limited (IOCL)",
      location: "Panipat Refinery, Haryana",
      year: "2008-2009",
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Key EPC Projects</h2>

      <div className={styles.cardContainer}>
        {epcData.map((val, i) => {
          return (
            <div
              className={styles.card}
              key={i}
              style={{ flexDirection: i % 2 == 0 ? "row" : "row-reverse" }}
            >
              <div className={styles.left}>
                <img src={val.imgLink} alt="" className={styles.leftImage} />
                <h2 className={styles.imageHeader}>{val.imgHeader}</h2>
              </div>
              <div className={styles.right}>
                <h2 className={styles.rightHeader}>{val.rightHeader}</h2>
                <h3 className={styles.rightContent}>
                  Location: {val.location}
                </h3>
                {val.year && (
                  <h3 className={styles.rightContent}>Year: {val.year}</h3>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.rtLayout}>
        <img src="/images/elipseRt.svg" className={styles.rtLImage} alt="" />
      </div>
    </div>
  );
};

export default SectionTwo;

import React from "react";
import styles from "./OurServices.module.css";
import { Link, useLocation } from "react-router-dom";

const OurServices = () => {
  const location = useLocation();
  const serviceData = [
    {
      header: `Complete Installations `,
      content: `Complete Installation, testing, commissioning services for Electrical Substations & Power Cables up to 220KV`,
      imgLink: "/images/services/img1.svg",
    },
    {
      header: `Health Check-Up`,
      content: `Health check-up of all MV, LV, HV & EHV switchgears and panels`,
      imgLink: "/images/services/img2.svg",
    },
    {
      header: `Specialized installation`,
      content: `Specialized installation & commissioning services for Gas Insulated Switchgears up to 400 kV & Air Insulated Switchgears up to 220 kV`,
      imgLink: "/images/services/img3.svg",
    },
    {
      header: `Specialized Services`,
      content: `Certified to provide specialized services for installation and assembling of cables systems accessories from Pfisterer Switzerland AG and Raychem joints and terminations up to 220KV cable`,
      imgLink: "/images/services/img4.svg",
    },
    {
      header: `Cable CURE Treatment`,
      content: `Cable CURE treatment for XLPE cables- authorized service provider of UtilX Corporation, a Willbros company, USA`,
      imgLink: "/images/services/img5.svg",
    },
    {
      header: `Repair & Refurbishment of RMUs`,
      content: `We take pride in being the pioneers in this segment and educating all the customers, particularly state utilities, to utilize the remaining life of these switchgears instead of scrapping it.`,
      imgLink: "/images/services/img6.svg",
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.header}> Our Services</h2>
      <div className={styles.wrapper}>
        {serviceData.map((val, i) => {
          return (
            <div className={styles.card} key={i}>
              <div className={styles.imgWrapper}>
                <img src={val.imgLink} className={styles.cardImage} alt="" />
              </div>
              <h2 className={styles.cardHeader}>{val.header}</h2>
              <h3 className={styles.content}>{val.content}</h3>
            </div>
          );
        })}
      </div>
      {location.pathname === "/" && (
        <div className={styles.dotsContainer}>
          <img src="/images/dots2.svg" alt="" className={styles.dots} />
          <Link to={"/services"} className={styles.viewBtn}>
            <p className={styles.btnText}>View Services</p>
          </Link>
        </div>
      )}

      <div className={`${styles.ltlayout}`}>
        <img
          src="/images/elipseLt.svg"
          className={styles.layoutImage}
          alt="elipse"
        />
      </div>
      <div className={styles.zlayout}>
        <img src="/images/zap.svg" className={styles.zImage} alt="" />
      </div>
    </div>
  );
};

export default OurServices;

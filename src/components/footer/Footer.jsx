import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";

import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.leftWrapper}>
            <img src="/images/logo.png" className={styles.logoImage} alt="" />

            <div className={styles.headerContainer}>
              <h2 className={styles.header}>
                Parth Electricals & Engineering Limited
              </h2>
              <h3 className={styles.subHeader}>
                (Formerly known as Parth Electricals & Engineering Pvt. Ltd.)
              </h3>
            </div>
          </div>

          <div className={styles.addContainer}>
            <div className={styles.addWrapper}>
              <div className={styles.addIcon}>
                <HiBuildingOffice2 />
              </div>
              <h3 className={styles.addText}>
                301, Riddhi-Siddhi Elanza, <br />
                Near Dominos, Subhanpura, <br />
                Vadodara, Gujarat, India, 390023. <br />
              </h3>
            </div>

            <div className={styles.addWrapper}>
              <div className={styles.addIcon}>
                <FaPhoneAlt />
              </div>
              <h3 className={styles.addText}>0265 - 2291922</h3>
            </div>

            <div className={styles.addWrapper}>
              <div className={styles.addIcon}>
                <IoMdMail />
              </div>
              <h3 className={styles.addText}>cfo@parthelectricals.in</h3>
            </div>
          </div>

          <div className={styles.socialContainer}>
            <h2 className={styles.socialHeader}>Social Links</h2>
            <div className={styles.socialWrapper}>
              <a className={styles.socialIcon}>
                <AiFillInstagram />
              </a>
              <a className={styles.socialIcon}>
                <RiFacebookCircleFill />
              </a>
              <a className={styles.socialIcon}>
                <RiTwitterXFill />
              </a>
              <a className={styles.socialIcon}>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Link to={"/"} className={styles.item}>
            Home
          </Link>
          <Link to={"/about-us"} className={styles.item}>
            About Us
          </Link>
          <Link to={"/products"} className={styles.item}>
            Products
          </Link>
          <Link to={"/services"} className={styles.item}>
            Services
          </Link>
          <Link to={"/epc-projects"} className={styles.item}>
            EPC Projects
          </Link>
          <Link to={"/certifications"} className={styles.item}>
            Certifications
          </Link>
          <Link to={"/technology-transfer-agreements"} className={styles.item}>
            Technology Transfer
          </Link>
          <Link to={"/media-mentions"} className={styles.item}>
            Media Mentions
          </Link>
          <Link to={"/investor-relations"} className={styles.item}>
            Investor Relations
          </Link>
          <Link to={"/contact-us"} className={styles.item}>
            Contact Us
          </Link>
        </div>
      </div>
      <h4 className={styles.resTxt}>
        © {new Date().getFullYear()} Parth Electricals & Engineering Limited.
        All rights reserved.
        <span className={styles.powText}>Powered by InfluCon Digitals</span>
      </h4>
    </div>
  );
};

export default Footer;

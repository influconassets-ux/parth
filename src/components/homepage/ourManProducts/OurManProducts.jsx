import React from "react";
import styles from "./OurManProducts.module.css";
import { Link } from "react-router-dom";

const OurManProducts = () => {
  const productsData = [
    { name: "RMU", imgLink: "/images/manproducts/img2.jpeg" },
    { name: "MV Panels", imgLink: "/images/manproducts/img1.jpeg" },
    { name: "E-House", imgLink: "/images/manproducts/ehouse.jpeg" },
    {
      name: "Control & Relay Panels",
      imgLink: "/images/manproducts/img4.jpeg",
    },
    { name: "Smart RMU", imgLink: "/images/manproducts/img5.jpeg" },
    { name: "PSS", imgLink: "/images/manproducts/img6.jpeg" },
    { name: "CSS", imgLink: "/images/manproducts/img7.png" },
    { name: "Earth link boxes", imgLink: "/images/manproducts/img8.jpeg" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>Our Manufactured Products</h2>

        <div className={styles.cardContainer}>
          {productsData.map((val, i) => {
            return (
              <div className={styles.card} key={i}>
                <img src={val.imgLink} className={styles.cardImage} alt="" />
                <h3 className={styles.imgHeader}>
                  <span>{val.name}</span>
                </h3>
              </div>
            );
          })}
        </div>

        <div className={styles.dotsContainer}>
          <img src="/images/dots1.svg" alt="" className={styles.dots} />
          <Link to={"/products"} className={styles.viewBtn}>
            <p className={styles.btnText}>View Products</p>
          </Link>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.redText}>Products</th>
                <th className={styles.smText}>RMU</th>
                <th className={styles.smText}>PSS</th>
                <th className={styles.smText}>Earth Link Box</th>
                <th className={styles.smText}>CRP</th>
                <th className={styles.smText}>Metering Panel</th>
                <th className={styles.smText}>Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.blueText}>Current Range</td>
                <td className={styles.smText}>11KV-22KV</td>
                <td className={styles.smText}>
                  11KV, 22KV & 33KV (Up to 5 MVA)
                </td>
                <td className={styles.smText}>
                  For grounding up to 220 KV cables
                </td>
                <td className={styles.smText}>33KV to 132 KV</td>
                <td className={styles.smText}>11KV, 22KV & 33KV</td>
                <td className={styles.smText}>415V to 220KV (Voltage Range)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OurManProducts;

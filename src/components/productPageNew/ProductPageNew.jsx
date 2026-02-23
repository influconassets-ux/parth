import React, { useState } from "react";
import styles from "./ProductPageNew.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Rmu from "./rmu/Rmu";
import OtherCards from "./otherCards/OtherCards";
import CssCard from "./cssCard/CssCard";

const ProductPageNew = ({ products, elbData }) => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const productTitle = [
    "RMU",
    "MV Panels",
    "E-House",
    "Control and Relay Panels",
    "Smart RMU",
    "PSS",
    "CSS",
    "Earth Link Boxes",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.leftBar}>
        {productTitle.map((val, i) => (
          <div
            className={
              i !== selectedProduct
                ? `${styles.leftCard} ${styles.inactiveCard}`
                : `${styles.leftCard} ${styles.activeCard}`
            }
            key={i}
            onClick={() => setSelectedProduct(i)}
          >
            <h2 className={styles.pName}>{val}</h2>
          </div>
        ))}
      </div>

      <main className={styles.productsContent}>
        {selectedProduct === 0 && <Rmu />}
        {selectedProduct === 1 && <OtherCards data={products[0]} />}
        {selectedProduct === 2 && <OtherCards data={products[1]} />}
        {selectedProduct === 3 && <OtherCards data={products[2]} />}
        {selectedProduct === 4 && <OtherCards data={products[3]} />}
        {selectedProduct === 5 && <OtherCards data={products[4]} />}
        {selectedProduct === 6 && <CssCard />}
        {selectedProduct === 7 && <OtherCards data={elbData} />}
      </main>

      <div className={`${styles.ltlayout}`}>
        <img
          src="/images/elipseLt.svg"
          className={styles.layoutImage}
          alt="elipse"
        />
      </div>
    </div>
  );
};

export default ProductPageNew;

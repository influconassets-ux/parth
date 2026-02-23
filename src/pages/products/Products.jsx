import React, { useEffect, useRef, useState } from "react";
import styles from "./Products.module.css";
import ServiceHero from "../../components/servicePage/serviceHero/ServiceHero";
import Rmu from "../../components/productsPage/rmu/Rmu";
import OtherCards from "../../components/productsPage/otherCards/OtherCards";
import CssCard from "../../components/productsPage/cssCard/CssCard";
import Navitems from "../../components/navitems/Navitems";
import { motion } from "framer-motion";
import ProductPageNew from "../../components/productPageNew/ProductPageNew";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

const Products = () => {
  const pdata = [
    {
      header: "MV Panels",
      imgLink: "/images/manproducts/img1.jpeg",
      content: `At Parth Electricals, we manufacture and supply robust, high-quality Medium Voltage (MV) Panels designed to ensure safe and reliable power distribution for medium-voltage applications. Our MV panels are built to meet stringent quality standards, providing superior performance in demanding industrial and commercial environments.`,
      points: [
        "Voltage Range: 3.3kV to 33kV",
        `Modular Design for Easy Installation and Expansion`,
        `Fully Compartmentalized for Maximum Safety`,
        `Indoor & Outdoor Versions Available`,
        `High Short Circuit Withstand Capacity`,
        `Integrated Protection Relays and Monitoring Systems`,
        `Type-Tested as per IEC Standards`,
        `Custom-Built Solutions to Suit Project Requirements`,
      ],
      flexType: "rev",
    },
    {
      header: "E-House",
      imgLink: "/images/manproducts/ehouse.jpeg",
      content:
        "At Parth Electricals, we specialize in providing fully-engineered, factory-assembled E-Houses (Electrical Houses) — compact, modular, and ready-to-install solutions for housing critical electrical equipment. Designed to reduce on-site work, E-Houses offer fast deployment, flexibility, and reliable operation in challenging environments.",
      points: [
        "Pre-Fabricated, Pre-Tested, and Plug & Play Installation",
        `Custom-Designed to Meet Client Specifications`,
        `Integrated with MV/LV Switchgear, Transformers, Control Panels & Protection Systems`,
        `Weatherproof, Fire-Retardant, and Robust Construction`,
        `Optimized for Space and Mobility`,
        `Built to Withstand Harsh Environmental Conditions`,
        `Complies with IEC and International Safety Standards`,
      ],
      flexType: "row",
    },
    {
      header: "Control and Relay Panels",
      imgLink: "/images/manproducts/img4.jpeg",
      content:
        "At Parth Electricals, we design and manufacture Control and Relay Panels (CRP) that form the backbone of reliable power system protection and control. Our CRPs are engineered with precision to ensure smooth operation, real-time monitoring, and protection of electrical networks in both industrial and utility environments.",
      points: [
        "Designed for 11kV, 22kV, and 33kV Substations",
        `Custom-Built as per Client Requirements and Grid Specifications`,
        `Integrated Protection Relays, SCADA Interface, and Control Switches`,
        `Complete Wiring, Testing, and Simulation at Factory Level`,
        `Modular, User-Friendly Layout for Easy Operation and Maintenance`,
        `High-Grade Enclosures with Powder Coating for Durability`,
        `Conforms to IEC Standards and Utility Norms`,
      ],
      flexType: "rev",
    },
    {
      header: "Smart RMU",
      imgLink: "/images/manproducts/img5.jpeg",
      content:
        "At Parth Electricals, we offer next-generation Smart City RMUs (Ring Main Units) designed to support modern, intelligent power distribution networks. Our Smart City RMUs are engineered to deliver reliable, automated, and real-time monitoring capabilities, essential for future-ready urban infrastructure.",
      points: [
        "Compact, SF6 Gas-Insulated Design",
        `SCADA-Enabled with Remote Monitoring and Control`,
        `Real-Time Fault Detection & Self-Healing Grid Support`,
        `Maintenance-Free with Long Operational Life`,
        `High Safety Standards with Arc Protection`,
        `Modular Design for Easy Network Expansion`,
        `Environment-Friendly, Compliant with Latest Smart Grid Norms`,
      ],
      flexType: "row",
    },
    {
      header: "PSS",
      imgLink: "/images/manproducts/img6.jpeg",
      content:
        "At Parth Electricals, we design and supply fully-integrated Packaged Substations (PSS) that offer a compact, safe, and efficient solution for medium-voltage power distribution. Our PSS units are factory-assembled, tested, and delivered as ready-to-install solutions, reducing site work and ensuring faster commissioning.",
      points: [
        "Fully Enclosed, Pre-Wired, and Pre-Tested Solutions",
        `Integrated MV Switchgear, Distribution Transformers, and LV Panels`,
        `Compact, Weatherproof & Skid-Mounted Design`,
        `Corrosion-Resistant Enclosures with Ventilation`,
        `Available in Indoor and Outdoor Configurations`,
        `Safe and Easy Maintenance Access`,
        `Complies with IEC and IS Standards`,
      ],
      flexType: "rev",
    },
  ];

  const elbData = {
    header: "Earth Link Boxes",
    imgLink: "/images/manproducts/img8.jpeg",
    content:
      "At Parth Electricals, we manufacture and supply high-quality Earth Link Boxes that provide safe and reliable earthing connections for underground cable systems. Our Earth Link Boxes are designed to offer easy access to cable earthing points, enabling regular inspection, testing, and maintenance without disrupting the cable system.",
    points: [
      `Robust Construction with Heavy-Duty Materials`,
      `Available in Galvanized Steel and Mild Steel with Powder Coating`,
      `Corrosion-Resistant and Weatherproof for Long Service Life`,
      `Single and Multiple Cable Earthing Options`,
      `Easy Accessibility for Testing and Maintenance`,
      `Designed for Safe Disconnection and Reconnection of Earthing Systems`,
      `Conforms to IEC Standards and Utility Specifications`,
    ],
    flexType: "rev",
  };

  const [startAnimation, setStartAnimation] = useState(false);
  const [isFixed, setFixed] = useState(false);
  const [changeBg, setChangeBg] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFixed(!entry.isIntersecting);
        setChangeBg(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "spring",
        mass: 1,
        stiffness: 100,
        damping: 15,
      }}
      onAnimationComplete={() => setStartAnimation(true)}
      className={styles.container}
    >
      <div ref={sentinelRef} className={styles.sentinel}></div>
      <div
        className={`${styles.navWrapper} ${
          isFixed ? styles.fixed : styles.absolute
        }`}
      >
        <Navitems changeBg={changeBg} />
      </div>
      <ServiceHero
        startAnimation={startAnimation}
        header={"Our Manufactured Products"}
        // bgImage={"productsBg.jpeg"}
        bgImage={""}
      />

      <div className={styles.mainContainer}>
        <h2 className={styles.botHeader}>Our Manufactured Products</h2>
        <ProductPageNew products={pdata} elbData={elbData} />

        {/* <div className={styles.cardsContainer}>
          <Rmu />

          {pdata.map((val, i) => {
            return <OtherCards data={val} key={i} />;
          })}

          <CssCard />
          <OtherCards data={elbData} />
        </div> */}
      </div>
      <div className={styles.rtLayout}>
        <img src="/images/swirlRt.svg" className={styles.ltImage} alt="" />
      </div>
    </motion.div>
  );
};

export default Products;

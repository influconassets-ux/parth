import React, { useEffect, useRef, useState } from "react";
import styles from "./FinReporting.module.css";
import ServiceHero from "../../components/servicePage/serviceHero/ServiceHero";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import withImageLayout from "../../hoc/withImageLayout";
import Navitems from "../../components/navitems/Navitems";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};
const finData = [
  { header: "Annual Report", toLink: "/annual-report" },
  { header: "Financial Statement", toLink: "/financial-statement" },
];
const FinCardsComponent = () => {
  return (
    <div className={styles.cardContainer}>
      {finData.map((val, i) => {
        return (
          <Link className={styles.card} to={val.toLink} key={i}>
            <h2 className={styles.cardText}>{val.header}</h2>
          </Link>
        );
      })}
    </div>
  );
};

const UpdatedCardComponent = withImageLayout(FinCardsComponent);

const FinReporting = () => {
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
        header={"Financial Reporting"}
        bgImage={"investor.jpeg"}
      />

      <UpdatedCardComponent />
    </motion.div>
  );
};

export default FinReporting;

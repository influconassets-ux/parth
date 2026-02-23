import styles from "./Ipo.module.css";
import ServiceHero from "../../components/servicePage/serviceHero/ServiceHero";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import Navitems from "../../components/navitems/Navitems";
import { motion } from "framer-motion";
import withImageLayout from "../../hoc/withImageLayout";

const ipoData = [
  { header: "Draft Red Herring Prospectus", toLink: "/ipo-pdf" },
  { header: "Addendum", toLink: "/addendum-pdf" },
  { header: "Red Herring Prospectus", toLink: "/rhp-pdf" },
  { header: "Prospectus", toLink: "" },
];
const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

const IpoCardsComponent = () => {
  return (
    <div className={styles.cardContainer}>
      {ipoData.map((val, i) => {
        return (
          <Link className={styles.card} to={val.toLink} key={i}>
            <h2 className={styles.cardText}>{val.header}</h2>
          </Link>
        );
      })}
    </div>
  );
};

const UpdatedCardComponent = withImageLayout(IpoCardsComponent);

const Ipo = () => {
  const [isFixed, setFixed] = useState(false);
  const [changeBg, setChangeBg] = useState(false);
  const sentinelRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

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
        bgImage={"investor.jpeg"}
        header={"Initial Public Offering"}
      />
      <UpdatedCardComponent />
    </motion.div>
  );
};

export default Ipo;

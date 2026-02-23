import React, { useEffect, useRef, useState } from "react";
import Navitems from "../../components/navitems/Navitems";
import styles from "./Services.module.css";
import ServiceHero from "../../components/servicePage/serviceHero/ServiceHero";
import OurServices from "../../components/homepage/ourServices/OurServices";
import { motion } from "framer-motion";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

const Services = () => {
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
      layout
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
        bgImage={"servicesBg.jpeg"}
        header={"Our Services"}
      />
      <div className={styles.serviceContainer}>
        <OurServices />
      </div>
      <div className={styles.rtLayout}>
        <img src="/images/swirlRt.svg" className={styles.ltImage} alt="" />
      </div>
    </motion.div>
  );
};

export default Services;

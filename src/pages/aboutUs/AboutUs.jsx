import React, { useEffect, useRef, useState } from "react";
import styles from "./AboutUs.module.css";
import AboutHero from "../../components/aboutPage/aboutHero/AboutHero";
import OurTeam from "../../components/aboutPage/ourTeam/OurTeam";
import OurJourney from "../../components/ourJourney/OurJourney";
import Navitems from "../../components/navitems/Navitems";
import { motion } from "framer-motion";
import Directors from "../../components/aboutPage/directors/Directors";
import IndependendDirectors from "../../components/aboutPage/independendDirectors/IndependendDirectors";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

const AboutUs = () => {
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
      <AboutHero startAnimation={startAnimation} />
      <Directors />
      <IndependendDirectors />
      <OurJourney />
      <OurTeam />
    </motion.div>
  );
};

export default AboutUs;

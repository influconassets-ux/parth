import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Hero from "../../components/homepage/hero/Hero";
import SectionTwo from "../../components/homepage/sectionTwo/SectionTwo";
import Directors from "../../components/homepage/directors/Directors";
import ClientList from "../../components/homepage/clientList/ClientList";
import Life from "../../components/homepage/life/Life";
import OurJourney from "../../components/ourJourney/OurJourney";
import SectionThreeSlider from "../../components/homepage/sectionThreeSlider/SectionThreeSlider";
import Navitems from "../../components/navitems/Navitems";
import { motion } from "motion/react";

const slideVariants = {
  initial: { x: "100%", opacity: 0 },    // Start offscreen right
  animate: { x: 0, opacity: 1 },         // Slide into center
  exit: {}, 
};

const Home = () => {
  const [isFixed, setFixed] = useState(false);
  const [changeBg, setChangeBg] = useState(false);
  const sentinelRef = useRef(null);
  const [ startAnimation, setStartAnimation] = useState(false)

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
      onAnimationComplete={()=> setStartAnimation(true)} className={styles.container}>
      {/* Sentinel just below global navbar, before Navitems */}
      <div ref={sentinelRef} className={styles.sentinel}></div>

      <motion.div
        id="homepageNavitems"
        className={`${styles.navWrapper} ${
          isFixed ? styles.fixed : styles.absolute
        }`}
      >
        <Navitems changeBg={changeBg} />
      </motion.div>
      <div id="homepageHero">
        <Hero startAnimation={startAnimation} />
      </div>
      <SectionTwo />
      <SectionThreeSlider />
      <OurJourney />
      <ClientList />
      <Life />
    </motion.div>
  );
};

export default Home;

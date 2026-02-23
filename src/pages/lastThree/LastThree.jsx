import React, { useEffect, useRef, useState } from "react";
import Navitems from "../../components/navitems/Navitems";
import styles from "./LastThree.module.css";
import ServiceHero from "../../components/servicePage/serviceHero/ServiceHero";
import { motion } from "framer-motion";
import withImageLayout from "../../hoc/withImageLayout";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

const ContentComponent = ({ pageheader, imageLink }) => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.botHeader}>{pageheader}</h2>
      {pageheader === "Media Mentions" && (
        <iframe
          className={styles.ytVid}
          src="https://www.youtube.com/embed/5BBmcIUtG-A"
          title="The Next Big Electricity IPO — Beyond Unicorns by S45 | Episode 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
      <img src={imageLink} className={styles.pageImage} alt="" />
    </div>
  );
};

const UpdatedContentComp = withImageLayout(ContentComponent);

const LastThree = ({ pageheader, imageLink, bgImage }) => {
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
        bgImage={bgImage}
        header={pageheader}
      />

      <UpdatedContentComp pageheader={pageheader} imageLink={imageLink} />
    </motion.div>
  );
};

export default LastThree;

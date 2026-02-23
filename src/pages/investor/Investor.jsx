import React, { useEffect, useRef, useState } from "react";
import Navitems from "../../components/navitems/Navitems";
import styles from "./Investor.module.css";
import ServiceHero from "../../components/servicePage/serviceHero/ServiceHero";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import InvestorAccordion from "../../components/investorAccordion/InvestorAccordion";
import withImageLayout from "../../hoc/withImageLayout";
import Main from "../../components/investorPage/main/Main";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};
const investorData = [
  { header: "IPO", toLink: "/ipo" },
  { header: "Board of Directors & Committees", toLink: "" },
  { header: "Financial Reporting", toLink: "/financial-reporting" },
  { header: "Annual Return", toLink: "" },
  { header: "Group Company", toLink: "" },
  { header: "Policies", toLink: "/policies" },
  { header: "Notice & Outcome", toLink: "" },
  { header: "Voting Results", toLink: "" },
  { header: "Newspaper Advertisement", toLink: "" },
  { header: "Shareholder Information", toLink: "" },
  { header: "Investor Grievances", toLink: "" },
  { header: "Others", toLink: "" },
];

const InvestorCardsComp = () => {
  return (
    // <div className={styles.cardContainer}>
    <div className={styles.accContainer}>
      {/* {investorData.map((val, i) => {
        return (
          <Link className={styles.card} to={val.toLink} key={i}>
            <h2 className={styles.cardText}>{val.header}</h2>
          </Link>
        );
      })} */}
      {/* <InvestorAccordion /> */}
      <Main />
    </div>
  );
};

const UpdatedCardsComp = withImageLayout(InvestorCardsComp);
const Investor = () => {
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
        header={"Investor Relations"}
        bgImage={"investor.jpeg"}
      />
      <UpdatedCardsComp />
    </motion.div>
  );
};

export default Investor;

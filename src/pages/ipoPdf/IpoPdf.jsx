import React, { useEffect, useRef, useState } from "react";
import styles from "./IpoPdf.module.css";
import ServiceHero from "../../components/servicePage/serviceHero/ServiceHero";
import Navitems from "../../components/navitems/Navitems";
import { motion } from "framer-motion";
import withImageLayout from "../../hoc/withImageLayout";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

const DocCardsComponent = ({ documentsList }) => {
  return (
    <div className={styles.dwnContainer}>
      {documentsList.map((doc) => {
        return (
          <a
            className={styles.btn}
            href={`/pdfs/${doc.link}`}
            download={doc.dwnName}
          >
            <img src="/images/dwnIcon.svg" className={styles.dwnIcon} alt="" />
            <h3 className={styles.btnTxt}>{doc.title}</h3>
          </a>
        );
      })}
    </div>
  );
};
const UpdatedCardComponent = withImageLayout(DocCardsComponent);

const IpoPdf = () => {
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

  let serviceHeader;

  let documentsList = [];

  if (location.pathname === "/ipo-pdf") {
    serviceHeader = "Initial Public Offering";
    documentsList = [
      {
        link: "DRHP_PARTH.pdf",
        dwnName: "DRHP_Parth.pdf",
        title: "DRHP_Parth",
      },
    ];
  } else if (location.pathname === "/annual-report") {
    serviceHeader = "Financial Reporting";
    documentsList = [
      {
        link: "Parth_Elec_Annual_Report_2022.pdf",
        dwnName: "Annual_Report_2022_Parth.pdf",
        title: "Annual_Report_2022",
      },
      {
        link: "Parth_Elec_Annual_Report_2023.pdf",
        dwnName: "Annual_Report_2023_Parth.pdf",
        title: "Annual_Report_2023",
      },
      {
        link: "Parth_Elec_Annual_Report_2024.pdf",
        dwnName: "Annual_Report_2024_Parth.pdf",
        title: "Annual_Report_2024",
      },
    ];
  } else if (location.pathname === "/financial-statement") {
    serviceHeader = "Financial Reporting";
    documentsList = [
      {
        link: "Financial_Statement_2022.pdf",
        dwnName: "Financial_Statement_2022_Parth.pdf",
        title: "Financial_Statement_2022",
      },
      {
        link: "Financial_Statement_2023.pdf",
        dwnName: "Financial_Statement_2023_Parth.pdf",
        title: "Financial_Statement_2023",
      },
      {
        link: "Financial_Statement_2024.pdf",
        dwnName: "Financial_Statement_2024_Parth.pdf",
        title: "Financial_Statement_2024",
      },
    ];
  } else if (location.pathname === "/policies") {
    serviceHeader = "Policies";
    documentsList = [
      {
        link: "policies/Alcohol & Substances Abuse Policy.pdf",
        dwnName: "Alcohol & Substances Abuse Policy.pdf",
        title: "Alcohol & Substances Abuse Policy",
      },
      {
        link: "policies/Business Ethics & Conduct Policy.pdf",
        dwnName: "Business Ethics & Conduct Policy.pdf",
        title: "Business Ethics & Conduct Policy",
      },
      {
        link: "policies/Drive to Suggestion Scheme.pdf",
        dwnName: "Drive to Suggestion Scheme.pdf",
        title: "Drive to Suggestion Scheme",
      },
      {
        link: "policies/EHS_Policy.pdf",
        dwnName: "EHS_Policy.pdf",
        title: "EHS_Policy",
      },
      {
        link: "policies/Employee Code of Conduct Policy.pdf",
        dwnName: "Employee Code of Conduct Policy.pdf",
        title: "Employee Code of Conduct Policy",
      },
      {
        link: "policies/IMS Policy.pdf",
        dwnName: "IMS Policy.pdf",
        title: "IMS Policy",
      },
      {
        link: "policies/Safety Commitee H.O..pdf",
        dwnName: "Safety Commitee H.O..pdf",
        title: "Safety Commitee H.O.",
      },
      {
        link: "policies/Safety Committee Factory.pdf",
        dwnName: "Safety Committee Factory.pdf",
        title: "Safety Committee Factory",
      },
      {
        link: "policies/Sexual Harassment Policy.pdf",
        dwnName: "Sexual Harassment Policy.pdf",
        title: "Sexual Harassment Policy",
      },
    ];
  } else if (location.pathname === "/addendum-pdf") {
    serviceHeader = "Initial Public Offering";
    documentsList = [
      {
        link: "Addendum_Parth.pdf",
        dwnName: "Addendum_Parth.pdf",
        title: "Addendum_Parth.pdf",
      },
    ];
  } else if (location.pathname === "/rhp-pdf") {
    serviceHeader = "Initial Public Offering";
    documentsList = [
      {
        link: "RHP_Parth.pdf",
        dwnName: "RHP_Parth.pdf",
        title: "RHP_Parth.pdf",
      },
    ];
  }

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
        header={serviceHeader}
      />

      <UpdatedCardComponent documentsList={documentsList} />
    </motion.div>
  );
};

export default IpoPdf;

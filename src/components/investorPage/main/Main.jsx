import React, { useState } from "react";
import styles from "./Main.module.css";
import SideBar from "../sideBar/SideBar";
import { sideBarData } from "../../../data/investorData";
import InvestorAccordion from "../../investorAccordion/InvestorAccordion";

const Main = () => {
  const [currentHeader, setCurrentHeader] = useState(sideBarData[0]);

  const handleHeaderChange = (newHeader) => {
    setCurrentHeader(newHeader);
  };
  return (
    <div className={styles.container}>
      <div className={styles.sideBarWrapper}>
        <SideBar
          data={sideBarData}
          handleHeaderChange={handleHeaderChange}
          currentHeader={currentHeader}
        />
      </div>
      <div className={styles.accWrapper}>
        <InvestorAccordion currentHeader={currentHeader} />
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import styles from "./InvestorDocCard.module.css";
import { FaFileArrowDown } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa";
import { FaRegFileAudio } from "react-icons/fa";

const InvestorDocCard = ({ docDetails }) => {
  const { link, dwnName, fileTitle, fileType } = docDetails;
  // console.log(docDetails);

  const getDriveViewLink = (downloadLink) => {
    const idMatch = downloadLink.match(/id=([a-zA-Z0-9_-]+)/);
    // console.log(idMatch[1]);
    return idMatch[1];
    // return idMatch
    //   ? `https://drive.google.com/file/d/${idMatch[1]}/view`
    //   : downloadLink;
  };
  return (
    <div className={styles.container}>
      <div className={styles.absEL}></div>

      <h2 className={styles.docTitle}>{fileTitle}</h2>

      <div className={styles.linkContainer}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkWrapper}
        >
          Download{" "}
          <div className={styles.dwnIcon}>
            <FaFileArrowDown />
          </div>
        </a>
        <a
          href={`/view-pdf/${getDriveViewLink(link)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkWrapper}
        >
          {fileType === "pdf" || fileType === "docx" ? "View" : "Listen"}
          <div className={styles.dwnIcon}>
            {fileType === "pdf" || fileType === "docx" ? (
              <FaFilePdf />
            ) : (
              <FaRegFileAudio />
            )}
          </div>
        </a>
      </div>
    </div>
  );
};

export default InvestorDocCard;

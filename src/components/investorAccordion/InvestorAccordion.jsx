import React, { useState, useRef, useEffect } from "react";
import styles from "./InvestorAccordion.module.css";
import { IoIosArrowDown } from "react-icons/io";
import InvestorDocCard from "../investorDocCard/InvestorDocCard";

const parseTableFromText = (text) => {
  const lines = text.split("\n");
  let html = "";
  let inTable = false;
  let tableRows = [];
  let paragraphLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.includes("|")) {
      // Flush paragraph lines before table
      if (paragraphLines.length > 0) {
        html += `<p>${paragraphLines.join(" ")}</p>`;
        paragraphLines = [];
      }
      if (!inTable) {
        inTable = true;
      }
      tableRows.push(line);
    } else {
      if (inTable && tableRows.length > 0) {
        // Build and insert table
        const tableHtml = buildTable(tableRows);
        html += tableHtml;
        tableRows = [];
        inTable = false;
      }
      if (line) {
        if (
          line.includes("COMMITTEE") ||
          line.includes("DIRECTORS") ||
          line.includes("NOMINATION")
        ) {
          if (paragraphLines.length > 0) {
            html += `<p>${paragraphLines.join(" ")}</p>`;
            paragraphLines = [];
          }
          html += `<strong>${line}</strong>`;
        } else {
          paragraphLines.push(line);
        }
      } else {
        // Empty line - end paragraph
        if (paragraphLines.length > 0) {
          html += `<p>${paragraphLines.join(" ")}</p>`;
          paragraphLines = [];
        }
      }
    }
  }

  // Flush remaining paragraph lines
  if (paragraphLines.length > 0) {
    html += `<p>${paragraphLines.join(" ")}</p>`;
  }
  if (tableRows.length > 0) {
    html += buildTable(tableRows);
  }

  return html;
};

const buildTable = (rows) => {
  if (rows.length === 0) return "";

  let tableHtml = '<table className="' + styles.plainTextTable + '">\n';

  rows.forEach((row, idx) => {
    const cells = row.split("|").map((cell) => cell.trim()).filter((cell) => cell);
    if (cells.length > 0) {
      tableHtml += "  <tr>\n";
      cells.forEach((cell) => {
        const tag = idx === 0 ? "th" : "td";
        tableHtml += `    <${tag}>${cell}</${tag}>\n`;
      });
      tableHtml += "  </tr>\n";
    }
  });

  tableHtml += "</table>\n";
  return tableHtml;
};

const InvestorAccordion = ({ currentHeader }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [direction, setDirection] = useState("down");
  const contentRefs = useRef([]);

  const handleClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setDirection(
        openIndex === null ? "down" : index > openIndex ? "up" : "down"
      );
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    setOpenIndex(null);
  }, [currentHeader]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>{currentHeader.header}</h1>
        {currentHeader.plainText && (
          <div
            className={styles.plainText}
            dangerouslySetInnerHTML={{
              __html: parseTableFromText(currentHeader.plainText),
            }}
          />
        )}
        {!currentHeader.plainText &&
          currentHeader.data.length === 0 &&
          currentHeader.documents.length === 0 && (
            <h3 className={styles.title}>No files to download</h3>
          )}
        {currentHeader.documents.length > 0 && (
          <div className={styles.cardWrapper}>
            {currentHeader.documents.map((doc, i) => {
              return <InvestorDocCard docDetails={doc} key={i} />;
            })}
          </div>
        )}
        {currentHeader.data.length > 0 && (
          <>
            {currentHeader.data.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div className={styles.cardContainer} key={index}>
                  <div
                    className={styles.card}
                    onClick={() => handleClick(index)}
                  >
                    <h3 className={styles.title}>{item.subHeader}</h3>
                    <div
                      className={styles.cardArrow}
                      style={{ rotate: isOpen ? "-180deg" : "0deg" }}
                    >
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div
                    className={styles.contentWrapper}
                    style={{
                      maxHeight: isOpen
                        ? contentRefs.current[index]?.scrollHeight + "px"
                        : "0px",
                      opacity: isOpen ? 1 : 0,
                      transition: "max-height 0.4s ease, opacity 0.3s ease",
                      overflow: "hidden",
                    }}
                    ref={(el) => (contentRefs.current[index] = el)}
                  >
                    {item.documents.length === 0 && (
                      <h3 className={styles.title} style={{ marginTop: "1vw" }}>
                        No files to download
                      </h3>
                    )}
                    <div className={styles.cardWrapper}>
                      {item.documents.map((doc, i) => {
                        return <InvestorDocCard docDetails={doc} key={i} />;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default InvestorAccordion;

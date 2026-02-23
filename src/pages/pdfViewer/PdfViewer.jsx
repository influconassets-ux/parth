import React from "react";
import { useParams } from "react-router-dom";

const PdfViewer = () => {
  const { pdfId } = useParams();
  console.log(pdfId);

  return (
    <div className="pdfContainer">
      <iframe
        id="iframePdf"
        src={`https://drive.google.com/file/d/${pdfId}/preview`}
      ></iframe>
    </div>
  );
};

export default PdfViewer;

import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Services from "./pages/services/Services";
import EpcProjects from "./pages/epcProjects/EpcProjects";
import Investor from "./pages/investor/Investor";
import Ipo from "./pages/ipo/Ipo";
import FinReporting from "./pages/finReporting/FinReporting";
import LastThree from "./pages/lastThree/LastThree";
import ContactUs from "./pages/contactUs/ContactUs";
import Products from "./pages/products/Products";
import IpoPdf from "./pages/ipoPdf/IpoPdf";

import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import { AnimatePresence } from "framer-motion";
import NotFound from "./pages/notFound/NotFound";
import PdfViewer from "./pages/pdfViewer/PdfViewer";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/view-pdf/:pdfId" element={<PdfViewer />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/epc-projects" element={<EpcProjects />} />
          <Route path="/investor-relations" element={<Investor />} />
          <Route path="/ipo" element={<Ipo />} />
          <Route path="/ipo-pdf" element={<IpoPdf />} />
          <Route path="/annual-report" element={<IpoPdf />} />
          <Route path="/financial-statement" element={<IpoPdf />} />
          <Route path="/addendum-pdf" element={<IpoPdf />} />
          <Route path="/rhp-pdf" element={<IpoPdf />} />
          <Route path="/policies" element={<IpoPdf />} />
          <Route path="/financial-reporting" element={<FinReporting />} />
          <Route
            path="/certifications"
            element={
              <LastThree
                pageheader="ISO Certfications"
                imageLink="/images/isoCert.png"
                bgImage={"certi.jpeg"}
              />
            }
          />
          <Route
            path="/technology-transfer-agreements"
            element={
              <LastThree
                pageheader="Technology Transfer Agreements"
                imageLink="/images/TTA.png"
                bgImage={"techTransfer.jpeg"}
              />
            }
          />
          <Route
            path="/media-mentions"
            element={
              <LastThree
                pageheader="Media Mentions"
                imageLink="/images/mediaMentions.png"
                bgImage={"mediaMentions.jpeg"}
              />
            }
          />
          <Route />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="appContainer">
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </div>
  );
}

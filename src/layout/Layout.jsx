import React, { useEffect } from "react";
import styles from "./Layout.module.css";
import Navbar from "../components/navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navitems from "../components/navitems/Navitems";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    const target = document.getElementById("globalNavbar");
    if (target) {
      target.scrollIntoView({});
    }
  }, [location]);
  return (
    <div className={styles.container}>
      <div id="globalNavbar">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

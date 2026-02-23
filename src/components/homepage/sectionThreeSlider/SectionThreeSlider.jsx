import React, { useRef } from "react";
import styles from "./SectionThreeSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurManProducts from "../ourManProducts/OurManProducts";
import OurServices from "../ourServices/OurServices";
import EpcProject from "../epcProject/EpcProject";

const SectionThreeSlider = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1, // Only 1 slide visible at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
  };
  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <Slider {...settings} ref={sliderRef}>
          <div className={styles.slide}>
            <OurManProducts />
          </div>

          <div className={styles.slide}>
            <OurServices />
          </div>
          <div className={styles.slide}>
            <EpcProject />
          </div>
        </Slider>

        <img
          src="/images/productLeftArw.svg"
          className={styles.arwLeft}
          alt=""
          onClick={() => sliderRef.current.slickPrev()}
        />
        <img
          src="/images/productRightArw.svg"
          className={styles.arwRight}
          alt=""
          onClick={() => sliderRef.current.slickNext()}
        />
      </div>
      <div className={`${styles.layout} ${styles.rtlayout}`}>
        <img
          src="/images/elipseRt.svg"
          className={styles.layoutImage}
          alt="elipse"
        />
      </div>
      <div className={`${styles.layout} ${styles.ltlayout}`}>
        <img
          src="/images/elipseLt.svg"
          className={styles.layoutImage}
          alt="elipse"
        />
      </div>
      <div className={`${styles.layout} ${styles.rtlayout2}`}>
        <img
          src="/images/elipseRt.svg"
          className={styles.layoutImage}
          alt="elipse"
        />
      </div>
    </div>
  );
};

export default SectionThreeSlider;

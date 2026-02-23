import React, { useRef } from "react";
import styles from "./OurJourney.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react";

const OurJourney = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false, // Shows navigation dots
    infinite: true, // Infinite looping
    speed: 1000, // Transition speed
    fade: true, // Enables fade animation
    slidesToShow: 1, // Only 1 slide visible at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
  };
  return (
    <div className={styles.container}>
      <motion.h2
        initial={{ y: 25, opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
          },
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className={styles.header}
      >
        Our Journey
      </motion.h2>
      <motion.div
        initial={{ y: 25, opacity: 0, scale: 0.7 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
          },
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className={styles.sliderContainer}
      >
        <Slider {...settings} ref={sliderRef} className="ourjSlider">
          <div className={styles.slide}>
            <img src="/images/jour1.svg" className={styles.slideImage} />
          </div>
          <div className={styles.slide}>
            <img src="/images/jour2.svg" className={styles.slideImage} />
          </div>
          <div className={styles.slide}>
            <img src="/images/jour3.svg" className={styles.slideImage} />
          </div>
        </Slider>
        <div className={styles.arwContainer}>
          <img
            src="/images/leftSlideArw.svg"
            className={styles.arwImage}
            alt=""
            onClick={() => sliderRef.current.slickPrev()}
          />
          <img
            src="/images/righSlideArw.svg"
            className={styles.arwImage}
            alt=""
            onClick={() => sliderRef.current.slickNext()}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default OurJourney;

import React, { useEffect, useRef, useState } from "react";
import { useMotionValue, animate, useInView } from "framer-motion";

const Counter = ({ to, duration = 1.5 }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animate only once

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        onUpdate: (latest) => setDisplay(Math.round(latest)),
      });

      return controls.stop;
    }
  }, [isInView, to, duration, count]);

  return (
    <span ref={ref}>{display}</span>
  );
};

export default Counter;

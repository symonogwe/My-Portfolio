// src/Components/CircularTextButton.jsx
import React from "react";

import { useColorModeValue } from "@chakra-ui/react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const CircularTextButton = ({
  text = "GET IN TOUCH",
  scrollTo = "contact",
  spinDuration = 18,
  size = 140,
}) => {
  // Colors and styles from theme
  const color = useColorModeValue("#2a9d8f", "#a8dadc");
  const textColor = useColorModeValue("#1d3557", "#f1faee");
  const controls = useAnimation();
  const rotation = useMotionValue(0);
  const letters = Array.from(text);

  // Animation config
  const spin = (duration) => ({
    rotate: rotation.get() + 360,
    transition: { duration, ease: "linear", repeat: Infinity },
  });

  // Start spinning on mount
  React.useEffect(() => {
    controls.start(spin(spinDuration));
    // eslint-disable-next-line
  }, []);

  // Speed up on hover
  const handleHoverStart = () => controls.start(spin(4));
  const handleHoverEnd = () => controls.start(spin(spinDuration));

  // CSS circular positioning
  const radius = size / 2.4;

  return (
    <ScrollLink to={scrollTo} smooth duration={800} offset={-80}>
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          color: textColor,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontWeight: 700,
          userSelect: "none",
        }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        tabIndex={0}
        aria-label={text}
        whileTap={{ scale: 0.93 }}
      >
        {letters.map((char, i) => {
          const angle = (360 / letters.length) * i - 90; // Start at top
          const rad = (angle * Math.PI) / 180;
          const x = radius + radius * Math.cos(rad);
          const y = radius + radius * Math.sin(rad);

          return (
            <span
              key={i}
              style={{
                position: "absolute",
                left: x,
                top: y,
                transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                fontSize: 18,
                color: color,
                pointerEvents: "none", // Only the circle is clickable
                fontFamily: "inherit",
                letterSpacing: "0.05em",
              }}
            >
              {char}
            </span>
          );
        })}
        {/* Center dot for interactivity (optional, style to taste) */}
        <span
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 18,
            height: 18,
            background: color,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 2px 10px 0 #0002",
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </ScrollLink>
  );
};

export default CircularTextButton;

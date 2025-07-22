import React, { useEffect } from "react";
import { useColorModeValue, useTheme } from "@chakra-ui/react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const CircularTextButton = ({
  text = "GET IN TOUCH",
  scrollTo = "contact",
  spinDuration = 18,
  size = 120,
  separator = " • ", // change to your preferred separator
}) => {
  const theme = useTheme();
  const isLight = useColorModeValue(true, false);

  // Use whiteAlpha.900 for everything in light mode, brand.100 in dark
  const color = isLight
    ? "whiteAlpha.900"
    : theme.colors.brand?.["100"] ?? "#e9c46a";
  const textColor = isLight
    ? "whiteAlpha.900"
    : theme.colors.brand?.["100"] ?? "#e9c46a";

  const controls = useAnimation();
  const rotation = useMotionValue(0);

  // Split text into words, then to letters, add separator after each word including last
  const words = text.toUpperCase().split(" ").filter(Boolean);
  let displayArr = [];
  words.forEach((word) => {
    word
      .split("")
      .forEach((letter) =>
        displayArr.push({ char: letter, isSeparator: false })
      );
    displayArr.push({ char: separator, isSeparator: true });
  });

  const spin = (duration) => ({
    rotate: rotation.get() + 360,
    transition: { duration, ease: "linear", repeat: Infinity },
  });

  useEffect(() => {
    controls.start(spin(spinDuration));
    // eslint-disable-next-line
  }, [spinDuration]);

  const handleHoverStart = () => controls.start(spin(spinDuration * 0.5));
  const handleHoverEnd = () => controls.start(spin(spinDuration));

  const radius = size / 2.1;

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
          fontFamily: theme.fonts.heading,
        }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        tabIndex={0}
        aria-label={text}
        whileTap={{ scale: 0.95 }}
      >
        {displayArr.map(({ char }, i) => {
          const angle = (360 / displayArr.length) * i - 90;
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
                color: textColor, // both main and separators
                opacity: 1,
                letterSpacing: "0.13em",
                fontWeight: "900",
                pointerEvents: "none",
                fontFamily: "inherit",
              }}
            >
              {char}
            </span>
          );
        })}
        {/* Center dot */}
        <span
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: size * 0.15,
            height: size * 0.15,
            background: color,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 2px 12px 0 #0002",
            border: `2.5px solid ${textColor}`,
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </ScrollLink>
  );
};

export default CircularTextButton;

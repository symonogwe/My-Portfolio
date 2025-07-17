import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import clientData from "../data/clientData";
import Silk from "./Silk";
import HeroFolder from "./HeroFolder";
import CircularTextButton from "./CircularTextButton";
import SocialIcons from "./SocialIcons";

// Motion variants
const MotionImage = motion.create(Image);
const MotionButton = motion.create(Button);

const HERO_HEIGHT = { base: "100vh", md: "100vh" };

const HeroSection = () => {
  const { name, role, tagline, image } = clientData.hero;

  // Theme tokens
  const headingColor = useColorModeValue("brand.500", "brand.100");
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const gradientRole = useColorModeValue(
    "linear(to-r, brand.500, brand.300, brand.100)",
    "linear(to-r, brand.100, brand.300, brand.500)"
  );

  // The full static text for the heading
  const heroText = `Hi, I’m ${name}`;

  return (
    <Box position="relative" width="100%" minH={HERO_HEIGHT} overflow="hidden">
      {/* Silk Background Layer */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={0}
      >
        <Silk
          speed={4}
          scale={1.2}
          color="#2a9d8f"
          noiseIntensity={2}
          rotation={0}
        />
      </Box>

      {/* Foreground Content */}
      <Flex
        position="relative"
        zIndex={1}
        minH={HERO_HEIGHT}
        align="center"
        justify="center"
        direction={{ base: "column", md: "row" }}
        px={{ base: 6, md: 24 }}
        py={{ base: 20, md: 0 }}
        gap={{ base: 12, md: 24 }}
        backdropFilter="auto"
        backdropBlur="sm"
      >
        {/* Profile Image */}
        <MotionImage
          src={image}
          alt={name}
          boxSize={{ base: "200px", md: "280px", lg: "320px" }}
          borderRadius="full"
          objectFit="cover"
          initial={{ y: 0 }}
          animate={{ y: [0, -16, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          shadow="2xl"
        />

        {/* Right Side Content */}
        <Stack
          spacing={8}
          maxW={{ base: "100%", md: "600px", lg: "700px" }}
          textAlign={{ base: "center", md: "left" }}
          align={{ base: "center", md: "flex-start" }}
          minH={{ base: "auto", md: "320px" }}
          justify="center"
        >
          {/* Ghost Heading for layout stability */}
          <Box
            position="relative"
            w="100%"
            minH={{ base: "3.5em", md: "5.5em" }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "2.2rem", md: "4rem", lg: "5rem" }}
              fontWeight="bold"
              color="transparent"
              visibility="hidden"
              userSelect="none"
              letterSpacing="tight"
              lineHeight={1.1}
              width="100%"
              m={0}
              p={0}
              whiteSpace={{ base: "normal", md: "nowrap" }}
              overflowWrap="break-word"
              wordBreak="break-word"
            >
              {heroText}
            </Heading>
            {/* Typewriter heading absolutely on top */}
            <Heading
              as="h1"
              fontSize={{ base: "2.2rem", md: "4rem", lg: "5rem" }}
              fontWeight="bold"
              color={headingColor}
              position="absolute"
              top={0}
              left={0}
              width="100%"
              letterSpacing="tight"
              lineHeight={1.1}
              m={0}
              p={0}
              textAlign={{ base: "center", md: "left" }}
              whiteSpace={{ base: "normal", md: "nowrap" }}
              overflowWrap="break-word"
              wordBreak="break-word"
            >
              <Typewriter
                words={[heroText]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </Heading>
          </Box>

          {/* Role with gradient effect */}
          <Text
            fontSize={{ base: "1.5rem", md: "2.1rem", lg: "2.5rem" }}
            fontWeight="extrabold"
            bgGradient={gradientRole}
            bgClip="text"
            mb={1}
          >
            {role}
          </Text>

          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            color={textColor}
            maxW="500px"
          >
            {tagline}
          </Text>
          <HeroFolder />
          {/* Circular text code */}
          <Flex
            w="100%"
            justify={{ base: "center", md: "flex-start" }}
            align="center"
            mt={8}
            gap={{ base: 6, md: 16 }}
            direction={{ base: "column", sm: "row" }}
          >
            <CircularTextButton text="GET IN TOUCH" scrollTo="contact" />
            <SocialIcons />
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default HeroSection;

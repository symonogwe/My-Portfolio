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

const MotionImage = motion(Image);
const MotionButton = motion(Button);

const HeroSection = () => {
  const { name, role, tagline, ctaText, image } = clientData.hero;

  // Dynamic colors for dark/light mode
  const headingColor = useColorModeValue("brand.500", "brand.100");
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  const roleColor = useColorModeValue("brand.900", "brand.100");

  return (
    <Flex
      id="hero"
      minH="100vh"
      align="center"
      justify="center"
      direction={{ base: "column", md: "row" }}
      px={{ base: 6, md: 16 }}
      py={{ base: 20, md: 0 }}
      gap={{ base: 12, md: 20 }}
    >
      {/* Floating Animated Profile Image */}
      <MotionImage
        src={image}
        alt={name}
        boxSize={{ base: "180px", md: "240px" }}
        borderRadius="full"
        objectFit="cover"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        shadow="lg"
      />

      {/* Text Section */}
      <Stack spacing={6} maxW="lg" textAlign={{ base: "center", md: "left" }}>
        <Heading
          fontSize={["2xl", "3xl", "5xl"]}
          fontWeight="bold"
          color={headingColor}
        >
          <Typewriter
            words={[`Hi, I’m ${name}`]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Heading>

        <Text fontSize="xl" fontWeight="semibold" color={roleColor}>
          {role}
        </Text>

        <Text fontSize="md" color={textColor} maxW="500px">
          {tagline}
        </Text>

        <MotionButton
          size="lg"
          px={8}
          py={6}
          bg="brand.500"
          color="white"
          _hover={{ bg: "brand.300" }}
          whileHover={{ scale: 1.05 }}
          transition="all 0.3s ease"
          alignSelf={{ base: "center", md: "flex-start" }}
        >
          {ctaText}
        </MotionButton>
      </Stack>
    </Flex>
  );
};

export default HeroSection;

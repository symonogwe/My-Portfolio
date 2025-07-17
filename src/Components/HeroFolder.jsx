import Folder from "./Folder";
import { useColorModeValue, Box } from "@chakra-ui/react";

const HeroFolder = () => {
  const folderColor = useColorModeValue("#2a9d8f", "#e9c46a"); // Theme-driven

  // Card inside the folder
  const resumeUrl = "/resume.pdf"; // Ensure this file exists in /public

  // Make the "paper" keyboard and mouse accessible
  const ResumeCard = (
    <Box
      as="button"
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      color="brand.900"
      fontWeight="bold"
      textAlign="center"
      p={4}
      cursor="pointer"
      transition="all 0.18s"
      _hover={{
        bg: "brand.100",
        boxShadow: "xl",
        color: "brand.500",
        transform: "scale(1.03)",
      }}
      tabIndex={0}
      aria-label="Open Resume PDF"
      onClick={(e) => {
        e.stopPropagation();
        window.open(resumeUrl, "_blank", "noopener,noreferrer");
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          window.open(resumeUrl, "_blank", "noopener,noreferrer");
        }
      }}
    >
      View CV / Resume
    </Box>
  );

  return (
    <Box
      mt={4}
      display="flex"
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      <Folder
        color={folderColor}
        size={1.15}
        items={[ResumeCard]}
        className="hero-folder"
      />
    </Box>
  );
};

export default HeroFolder;

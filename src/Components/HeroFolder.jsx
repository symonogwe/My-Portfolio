// src/Components/HeroFolder.jsx

import Folder from "./Folder"; // Path to your React Bits Folder component
import { useColorModeValue, Box } from "@chakra-ui/react";

// Make sure you import "./Folder.css"; in Folder.jsx itself!

const HeroFolder = () => {
  // Use your main theme color here
  const folderColor = useColorModeValue("#2a9d8f", "#e9c46a"); // Or from theme.js if preferred

  // The Resume card component (the paper inside the folder)
  const resumeUrl = "/resume.pdf"; // Put resume.pdf in /public folder

  const ResumeCard = (
    <Box
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
      onClick={() => window.open(resumeUrl, "_blank")}
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
        // color={folderColor}
        // size={1.15}
        // items={[ResumeCard]}
        // className="hero-folder"

        color="#e9c46a"
        size={1.15}
        items={[
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              background: "transparent",
            }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent folder from closing on click
              window.open("/resume.pdf", "_blank");
            }}
          >
            CV / Resume
          </div>,
        ]}
      />
    </Box>
  );
};

export default HeroFolder;

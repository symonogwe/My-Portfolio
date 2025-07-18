import { Box, Heading, Text, Button } from "@chakra-ui/react";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import SkillsSection from "./Components/SkillsSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
    </>
  );
}

export default App;

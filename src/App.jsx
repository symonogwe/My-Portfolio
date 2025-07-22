import { Box, Heading, Text, Button } from "@chakra-ui/react";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import SkillsSection from "./Components/SkillsSection";
import ProjectsSection from "./Components/ProjectsSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;

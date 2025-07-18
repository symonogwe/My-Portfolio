// src/data/clientData.js

const clientData = {
  hero: {
    name: "Symon Opondi",
    role: "Frontend Developer",
    tagline:
      "I build fast, modern websites with beautiful design & performance in mind.",
    ctaText: "Let’s Work Together",
    image: "/assets/profile-pic.jpg", // Add your photo here later
  },
  socials: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/your-username",
    },
    {
      label: "GitHub",
      href: "https://github.com/your-username",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/your-username",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/your-username",
    },
    {
      label: "Medium",
      href: "https://medium.com/@your-username",
    },
  ],
  skills: [
    { name: "React", icon: "SiReact" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "Chakra UI", icon: "SiChakraui" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Framer Motion", icon: "SiFramer" },
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "CSS3", icon: "SiCss3" },
    { name: "Project Management", icon: "FaRegLightbulb" }, // Generic "idea" icon
    { name: "IT Business Analysis", icon: "BsFillPeopleFill" }, // User/people icon
    { name: "Figma", icon: "SiFigma" },
    { name: "Git & Github", icon: "SiGithub" },
    // Add more skills, set icon: null or leave undefined for text-only!
  ],
};

export default clientData;

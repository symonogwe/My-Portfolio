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
  projects: [
    {
      title: "Marcelo Consultancy",
      description:
        "A platform connecting health & social care professionals to hospitals and care homes. Includes job board, user profiles, and in-app messaging.",
      liveUrl: "https://marceloconsultancy.co.uk/",
    },
    {
      title: "Game Hub",
      description:
        "A modern corporate website for Nia Energies featuring smooth animations, responsive layouts, and seamless dark/light mode switching. Built with React, Chakra UI, and Framer Motion.",
      liveUrl: "https://symon-game-hub.vercel.app/",
    },
    {
      title: "To-do List",
      description:
        "A fleet management dashboard for tracking vehicle activity, KPIs, and analytics. Designed with a mobile-first approach and custom chart components.",
      liveUrl: "https://symonogwe.github.io/To-Do-List/",
    },
    {
      title: "BattleShips Game",
      description:
        "A client-facing portal for Jaguar Petroleum with account management, document uploads, and secure login. Integrates with Salesforce and ERPNext APIs.",
      liveUrl: "https://symonogwe.github.io/Battleship-game/",
    },

    {
      title: "Weather App",
      description:
        "A highly customizable personal portfolio template, with clientData.js powering all dynamic sections. Optimized for performance, SEO, and rapid deployment.",
      liveUrl: "https://symonogwe.github.io/Weather-App/",
    },
    {
      title: "Tic Tac Toe",
      description:
        "A highly customizable personal portfolio template, with clientData.js powering all dynamic sections. Optimized for performance, SEO, and rapid deployment.",
      liveUrl: "https://symonogwe.github.io/Tic-Tac-Toe/",
    },
  ],
};

export default clientData;

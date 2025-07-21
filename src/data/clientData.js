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
        "A smart staffing platform connecting hospitals, care homes, and schools with qualified professionals. Effortlessly manage placements, shifts, and compliance—all in one place.",
      liveUrl: "https://marceloconsultancy.co.uk/",
    },
    {
      title: "Game Hub",
      description:
        "Discover, filter, and search video games by genre, platform, or popularity. Find your next favorite game quickly with advanced search and intuitive categories.",
      liveUrl: "https://symon-game-hub.vercel.app/",
    },
    {
      title: "To-do List",
      description:
        "Organize your life with project-based to-do lists. Create projects, add tasks, and view your work by day or week for maximum productivity and clarity.",
      liveUrl: "https://symonogwe.github.io/To-Do-List/",
    },
    {
      title: "BattleShips Game",
      description:
        "A web-based twist on the classic Battleships board game. Build your fleet and challenge the computer in a battle of strategy and luck!",
      liveUrl: "https://symonogwe.github.io/Battleship-game/",
    },

    {
      title: "Weather App",
      description:
        "Get live weather updates for any city. Instantly view temperature, wind, sunrise, sunset, and moon data with a clean, intuitive interface.",
      liveUrl: "https://symonogwe.github.io/Weather-App/",
    },
    {
      title: "Tic Tac Toe",
      description:
        "A modern web version of the classic two-player TicTacToe game—simple, interactive, and perfect for quick fun.",
      liveUrl: "https://symonogwe.github.io/Tic-Tac-Toe/",
    },
  ],
};

export default clientData;

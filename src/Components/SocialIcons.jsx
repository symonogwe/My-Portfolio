// // src/Components/SocialIcons.jsx

// import { HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaInstagram,
//   FaTwitter,
//   FaMedium,
// } from "react-icons/fa";

// const socials = [
//   {
//     icon: FaLinkedin,
//     label: "LinkedIn",
//     href: "https://linkedin.com/in/symon-opondi-61448b18b",
//   },
//   {
//     icon: FaGithub,
//     label: "GitHub",
//     href: "https://github.com/your-username",
//   },
//   {
//     icon: FaInstagram,
//     label: "Instagram",
//     href: "https://instagram.com/your-username",
//   },
//   {
//     icon: FaTwitter,
//     label: "Twitter",
//     href: "https://twitter.com/your-username",
//   },
//   {
//     icon: FaMedium,
//     label: "Medium",
//     href: "https://medium.com/@your-username",
//   },
// ];

// const SocialIcons = () => {
//   const color = useColorModeValue("brand.500", "brand.300");

//   return (
//     <HStack spacing={4}>
//       {socials.map(({ icon: Icon, label, href }) => (
//         <IconButton
//           key={label}
//           as="a"
//           href={href}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label={label}
//           icon={<Icon size={22} />}
//           color={color}
//           variant="ghost"
//           _hover={{
//             bg: "brand.100",
//             color: "white",
//             transform: "scale(1.18)",
//             boxShadow: "md",
//           }}
//           transition="all 0.18s"
//         />
//       ))}
//     </HStack>
//   );
// };

// export default SocialIcons;

// src/Components/SocialIcons.jsx

import { HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaMedium,
} from "react-icons/fa";
import clientData from "../data/clientData";

// Icon mapping (label: icon)
const iconMap = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  Twitter: FaTwitter,
  Medium: FaMedium,
};

const SocialIcons = () => {
  const iconColor = useColorModeValue("brand.500", "brand.100");
  const iconHover = useColorModeValue("brand.900", "brand.300");
  return (
    <HStack spacing={5}>
      {clientData.socials.map(({ label, href }) => {
        const Icon = iconMap[label];
        if (!Icon) return null; // Defensive: skip unknown labels
        return (
          <IconButton
            key={label}
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            icon={<Icon size={26} />}
            color={iconColor}
            variant="ghost"
            _hover={{
              color: iconHover,
              bg: "brand.100",
              transform: "scale(1.12)",
              boxShadow: "0 4px 18px 0px #e9c46a40",
              transition: "all 0.23s cubic-bezier(.43,1.34,.55,.99)",
            }}
            transition="all 0.2s"
            fontSize="2xl"
          />
        );
      })}
    </HStack>
  );
};

export default SocialIcons;

// src/Components/SocialIcons.jsx

import { HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaMedium,
} from "react-icons/fa";

const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/your-username",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/your-username",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    href: "https://twitter.com/your-username",
  },
  {
    icon: FaMedium,
    label: "Medium",
    href: "https://medium.com/@your-username",
  },
];

const SocialIcons = () => {
  const color = useColorModeValue("brand.500", "brand.300");

  return (
    <HStack spacing={4}>
      {socials.map(({ icon: Icon, label, href }) => (
        <IconButton
          key={label}
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          icon={<Icon size={22} />}
          color={color}
          variant="ghost"
          _hover={{
            bg: "brand.100",
            color: "white",
            transform: "scale(1.18)",
            boxShadow: "md",
          }}
          transition="all 0.18s"
        />
      ))}
    </HStack>
  );
};

export default SocialIcons;

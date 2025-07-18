// src/Components/SkillCard.jsx
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

function getIconComponent(icon) {
  if (!icon) return null;
  // Check which icon pack
  if (icon.startsWith("Si")) return SiIcons[icon] || null;
  if (icon.startsWith("Fa")) return FaIcons[icon] || null;
  if (icon.startsWith("Bs")) return BsIcons[icon] || null;
  return null;
}

const SkillCard = ({ name, icon }) => {
  const color = useColorModeValue("brand.500", "brand.100");
  const bg = useColorModeValue("white", "gray.900");

  const Icon = getIconComponent(icon);

  return (
    <Box
      p={5}
      borderRadius="xl"
      bg={bg}
      shadow="lg"
      textAlign="center"
      transition="0.18s"
      _hover={{
        transform: "translateY(-7px) scale(1.04)",
        boxShadow: "2xl",
        bg: "brand.50",
      }}
    >
      {Icon ? (
        <Box as={Icon} fontSize="3xl" color={color} mb={2} aria-label={name} />
      ) : (
        <Box
          mb={2}
          fontSize="2xl"
          color={color}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="full"
          border="1.5px solid"
          borderColor={color}
          boxSize={12}
        >
          {/* Initial or fallback symbol */}
          {name.charAt(0)}
        </Box>
      )}
      <Text fontWeight="bold">{name}</Text>
    </Box>
  );
};

export default SkillCard;

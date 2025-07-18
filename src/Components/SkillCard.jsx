// // src/Components/SkillCard.jsx
// import { Box, Text, useColorModeValue } from "@chakra-ui/react";
// import * as SiIcons from "react-icons/si";
// import * as FaIcons from "react-icons/fa";
// import * as BsIcons from "react-icons/bs";

// function getIconComponent(icon) {
//   if (!icon) return null;
//   // Check which icon pack
//   if (icon.startsWith("Si")) return SiIcons[icon] || null;
//   if (icon.startsWith("Fa")) return FaIcons[icon] || null;
//   if (icon.startsWith("Bs")) return BsIcons[icon] || null;
//   return null;
// }

// const SkillCard = ({ name, icon }) => {
//   const color = useColorModeValue("brand.500", "brand.100");
//   const bg = useColorModeValue("white", "gray.900");

//   const Icon = getIconComponent(icon);

//   return (
//     <Box
//       p={5}
//       borderRadius="xl"
//       bg={bg}
//       shadow="lg"
//       textAlign="center"
//       transition="0.18s"
//       _hover={{
//         transform: "translateY(-7px) scale(1.04)",
//         boxShadow: "2xl",
//         bg: "brand.50",
//       }}
//     >
//       {Icon ? (
//         <Box as={Icon} fontSize="3xl" color={color} mb={2} aria-label={name} />
//       ) : (
//         <Box
//           mb={2}
//           fontSize="2xl"
//           color={color}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           borderRadius="full"
//           border="1.5px solid"
//           borderColor={color}
//           boxSize={12}
//         >
//           {/* Initial or fallback symbol */}
//           {name.charAt(0)}
//         </Box>
//       )}
//       <Text fontWeight="bold">{name}</Text>
//     </Box>
//   );
// };

// export default SkillCard;

import { Box, Text, useColorModeValue, Flex, Center } from "@chakra-ui/react";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

function getIconComponent(icon) {
  if (!icon) return null;
  if (icon.startsWith("Si")) return SiIcons[icon] || null;
  if (icon.startsWith("Fa")) return FaIcons[icon] || null;
  if (icon.startsWith("Bs")) return BsIcons[icon] || null;
  return null;
}

const ICON_SIZE = {
  base: "2.2rem",
  sm: "2.6rem",
  md: "2.9rem",
  lg: "3.2rem",
};

const CARD_BG = { light: "white", dark: "gray.900" };
const ICON_BG = { light: "gray.50", dark: "gray.800" };
const TEXT_COLOR = { light: "gray.800", dark: "whiteAlpha.900" };

const SkillCard = ({ name, icon }) => {
  // All hooks called at the top level
  const color = useColorModeValue("brand.500", "brand.100");
  const bg = useColorModeValue(CARD_BG.light, CARD_BG.dark);
  const iconBg = useColorModeValue(ICON_BG.light, ICON_BG.dark);
  const textColor = useColorModeValue(TEXT_COLOR.light, TEXT_COLOR.dark);
  const iconHover = useColorModeValue("brand.700", "brand.50");

  const Icon = getIconComponent(icon);

  return (
    <Flex
      aspectRatio={1}
      h={{ base: "108px", sm: "120px", md: "142px", lg: "154px" }}
      direction="column"
      align="center"
      justify="center"
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
      position="relative"
      overflow="hidden"
      role="group"
    >
      {/* Icon section */}
      <Center w="full" h="57%">
        {Icon ? (
          <Box
            as={Icon}
            fontSize={ICON_SIZE}
            color={color}
            aria-label={name}
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={1}
            transition="color 0.18s"
            _groupHover={{ color: iconHover }}
          />
        ) : (
          <Center
            fontSize={ICON_SIZE}
            color={color}
            borderRadius="full"
            border="2px solid"
            borderColor={color}
            boxSize={{
              base: "2.2rem",
              sm: "2.6rem",
              md: "2.9rem",
              lg: "3.2rem",
            }}
            fontWeight="bold"
            mb={1}
            bg={iconBg}
          >
            {name.charAt(0)}
          </Center>
        )}
      </Center>

      {/* Name text section */}
      <Flex align="center" justify="center" w="full" h="43%" px={2}>
        <Text
          fontWeight="bold"
          fontSize={{ base: "sm", md: "md" }}
          color={textColor}
          whiteSpace="normal"
          textAlign="center"
          wordBreak="break-word"
          lineHeight="1.18"
          noOfLines={2}
        >
          {name}
        </Text>
      </Flex>
    </Flex>
  );
};

export default SkillCard;

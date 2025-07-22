// import {
//   Box,
//   Heading,
//   Text,
//   Link,
//   Center,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import * as FaIcons from "react-icons/fa";
// import ScrollStack, { ScrollStackItem } from "./ScrollStack";
// import clientData from "../data/clientData";

// // Helper to get icon
// function getIconComponent(name) {
//   return FaIcons[name] || FaIcons.FaRegQuestionCircle;
// }

// const MotionHeading = motion(Heading);

// const ContactSection = () => {
//   // Get all your theme colors ONCE at the top:
//   const bg = useColorModeValue("gray.50", "gray.900");
//   const cardBg = useColorModeValue("white", "gray.800");
//   const cardShadow = useColorModeValue("xl", "2xl");
//   //   const titleColor = useColorModeValue("brand.900", "brand.100");
//   const labelColor = useColorModeValue("brand.900", "brand.100");
//   const linkColor = useColorModeValue("brand.500", "brand.100");

//   return (
//     <Box
//       as="section"
//       id="contact"
//       bg={bg}
//       py={{ base: 12, md: 24 }}
//       px={{ base: 2, md: 10 }}
//       w="full"
//       minH="75vh"
//     >
//       {/* Animated Heading */}
//       <MotionHeading
//         fontSize={{ base: "2xl", md: "4xl" }}
//         textAlign="center"
//         color={linkColor}
//         fontWeight="bold"
//         mb={12}
//         initial={{ opacity: 0, y: 70 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//       >
//         Contact Me
//       </MotionHeading>
//       {/* ScrollStack Cards */}
//       <Box maxW="3xl" mx="auto" h={{ base: "auto", md: "66vh" }}>
//         <ScrollStack>
//           {clientData.contact.map((c) => {
//             const Icon = getIconComponent(c.icon);
//             return (
//               <ScrollStackItem key={c.type}>
//                 <Center h="100%" w="100%">
//                   <Box
//                     w={{ base: "96%", md: "80%" }}
//                     h={{ base: "220px", md: "240px" }}
//                     borderRadius="2xl"
//                     bg={cardBg}
//                     boxShadow={cardShadow}
//                     display="flex"
//                     flexDir="column"
//                     alignItems="center"
//                     justifyContent="center"
//                     p={8}
//                     transition="all 0.24s"
//                     _hover={{ boxShadow: "2xl", transform: "scale(1.03)" }}
//                   >
//                     <Box as={Icon} fontSize="2.8rem" color={c.color} mb={4} />
//                     <Text
//                       fontSize="lg"
//                       fontWeight="bold"
//                       mb={2}
//                       color={labelColor}
//                     >
//                       {c.type}
//                     </Text>
//                     <Link
//                       href={c.link}
//                       color={linkColor}
//                       fontSize="lg"
//                       fontWeight="semibold"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {c.value}
//                     </Link>
//                   </Box>
//                 </Center>
//               </ScrollStackItem>
//             );
//           })}
//         </ScrollStack>
//       </Box>
//     </Box>
//   );
// };

// export default ContactSection;

// src/Components/ContactSection.jsx
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import clientData from "../data/clientData";

const MotionBox = motion(Box);

const ContactSection = () => {
  // All hooks at the top!
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("brand.500", "brand.100");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");
  // These are for hover, pre-calculate both values (will use inside .map())
  const hoverBg = useColorModeValue("brand.50", "gray.700");
  const hoverIconColor = useColorModeValue("brand.500", "brand.100");

  return (
    <Box
      id="contact"
      py={{ base: 16, md: 28 }}
      px={{ base: 4, md: 0 }}
      bg={bg}
      minH="70vh"
      w="full"
    >
      <Heading
        as="h2"
        mb={12}
        textAlign="center"
        fontWeight="extrabold"
        color={headingColor}
        fontSize={{ base: "2xl", md: "4xl" }}
        letterSpacing="tight"
      >
        Contact Me
      </Heading>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 4 }}
        spacing={{ base: 6, md: 10 }}
        maxW="6xl"
        mx="auto"
        w="full"
      >
        {clientData.contact.map((method, i) => {
          const IconComponent = FaIcons[method.icon];
          // Link formatting for LinkedIn
          const href =
            method.type === "LinkedIn" && !method.link.startsWith("http")
              ? `https://${method.link}`
              : method.link;

          return (
            <MotionBox
              key={method.type}
              as={Link}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.13 }}
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="lg"
              p={8}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              _hover={{
                boxShadow: "2xl",
                transform: "translateY(-8px) scale(1.03)",
                textDecoration: "none",
                bg: hoverBg, // Use variable
              }}
              role="group"
            >
              <Icon
                as={IconComponent}
                boxSize={12}
                color={method.color}
                mb={6}
                _groupHover={{
                  color: hoverIconColor, // Use variable
                }}
              />
              <Text fontWeight="bold" fontSize="xl" color={headingColor} mb={2}>
                {method.type}
              </Text>
              <Text
                color={textColor}
                fontSize="md"
                wordBreak="break-all"
                noOfLines={2}
              >
                {method.value}
              </Text>
            </MotionBox>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ContactSection;

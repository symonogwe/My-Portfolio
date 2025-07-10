import { Box, Heading, Text, Button } from "@chakra-ui/react";

function App() {
  return (
    <Box p={8} textAlign="center">
      <Heading fontSize="4xl" bgGradient="brand.gradient" bgClip="text">
        Hello, Symon 👋
      </Heading>
      <Text fontSize="lg" mt={4}>
        Let’s build the cleanest animated portfolio on the planet!
      </Text>
      <Button mt={6} colorScheme="purple">
        Get Started
      </Button>
    </Box>
  );
}

export default App;

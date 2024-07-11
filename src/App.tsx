// src/App.tsx
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box p={4}>
        <Heading>Welcome to My App</Heading>
      </Box>
    </ChakraProvider>
  );
}

export default App;

// src/App.tsx
import { ChakraProvider, Box, Heading } from '@chakra-ui/react';

function App() {
  const spark = "⚡️ Spark! ⚡️";
  
  return (
    <ChakraProvider>
      <Box p={4}>
        <Heading>Welcome to {spark}</Heading>
      </Box>
    </ChakraProvider>
  );
}

export default App;

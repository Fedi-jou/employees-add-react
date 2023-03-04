import React from "react";
import {
  FormControl,
  Box,
  Heading,
  Checkbox,
  Text,
  VStack,
  FormLabel,
  Input,
  HStack,
  Button,
} from "@chakra-ui/react";

function Login() {
  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[20, "10vh"]}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      borderRadius={10}
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full" mb={3}>
          <Heading>Login</Heading>
          <Text>Enter your email and password to login</Text>
        </VStack>
        <FormControl>
          <FormLabel>E-mail Adress</FormLabel>
          <Input rounded="none" variant="filled"></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input rounded="none" variant="filled"></Input>
        </FormControl>
        <HStack w="full" justify="space-between">
          <Checkbox>Remember me</Checkbox>
          <Button variant="link" colorScheme="blue">
            Forgot Password ?
          </Button>
        </HStack>

        <Button colorScheme="blue">Login</Button>
      </VStack>
    </Box>
  );
}

export default Login;

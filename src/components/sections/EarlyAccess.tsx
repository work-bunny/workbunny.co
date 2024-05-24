import { Flex, Text, VStack } from "@chakra-ui/react";
import { Form } from "../Index";

export const EarlyAccess = () => {
  return (
    <Flex h="400px" justifyContent="center" alignItems="center">
      <VStack color="#fff" textAlign="center" gap={8}>
        <Text
          fontSize={{ base: "30px", md: "45px", lg: "50px" }}
          fontWeight="bold"
          color="#2631c3"
        >
          You scrolled this far
        </Text>
        <Text
          w={{ base: "80%", md: "50%", lg: "60%" }}
          fontSize={{ base: "17px", md: "18px", lg: "20px" }}
          color="gray.500"
        >
          You've made it this far, so we must have caught your eye. Don't miss
          out—sign up now for early access!
        </Text>
        <Form />
      </VStack>
    </Flex>
  );
};

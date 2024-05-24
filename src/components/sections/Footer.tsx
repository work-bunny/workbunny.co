import { Divider, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Helmet } from "../Index";

export const Footer = () => {
  const date = new Date();
  return (
    <VStack bgColor="#2631c3" mt="50px" p="40px 20px" w="100%" gap={5}>
      <Flex justifyContent="space-between" w="100%">
        <Helmet name="WORK BUNNY" inverted />
        <HStack gap={3}>
          <Image
            alt="google-play"
            src="././google.png"
            borderRadius="18px"
            h={{ base: "50px", md: "60px", lg: "60px" }}
          />
          <Image
            alt="apple-store"
            src="././apple.png"
            borderRadius="18px"
            h={{ base: "50px", md: "60px", lg: "60px" }}
          />
        </HStack>
      </Flex>
      <Divider color="white" border="1px" />
      <Text color="#fff" fontWeight="bold">
        © {date.getFullYear()} Work Bunny. All rights reserved.
      </Text>
    </VStack>
  );
};

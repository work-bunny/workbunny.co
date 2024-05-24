import { Flex, Text, VStack } from "@chakra-ui/react";

export const Discover = () => {
  return (
    <Flex
      bgColor="#2631c3"
      mt={{ base: "150px", md: "120px", lg: "120px" }}
      h={{ base: "330px", lg: "400px" }}
      justifyContent="center"
      alignItems="center"
    >
      <VStack color="#fff" textAlign="center">
        <Text
          fontSize={{ base: "30px", md: "45px", lg: "50px" }}
          fontWeight="bold"
        >
          Discover Work Bunny
        </Text>
        <Text
          w={{ base: "90%", md: "70%", lg: "800px" }}
          fontSize={{ base: "17px", md: "18px", lg: "20px" }}
        >
          Designed to connect job seekers from accross the globe and be a
          platform where members can share and receive useful insight and
          experience on the specific niches of the market you are searching for
          a job in.
        </Text>
      </VStack>
    </Flex>
  );
};

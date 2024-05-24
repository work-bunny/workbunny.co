import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { CustomImage, GetEarlyAccessLink } from "../Index";

export const Dashboard = () => {
  return (
    <Flex justifyContent="center" alignItems="center" overflow="hidden">
      <Flex
        p={{ base: "70px 100px", md: "100px", lg: "100px" }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        gap={8}
      >
        <VStack w={{ base: "100%", md: "100%", lg: "50%" }} gap={5}>
          <Text
            textAlign="left"
            color="#2631c3"
            fontWeight="bold"
            fontSize={{ base: "30px", md: "45px", lg: "50px" }}
            mr="auto"
          >
            Personalized dashboard
          </Text>
          <Text color="gray.500" fontSize={{ md: "19px", lg: "20px" }}>
            Get equipped with a personalized dashboard to seamlessly track your
            job search process. Gain insights and tips from fellow job seekers
            in your industry and country, learning from their strategies.
            Generate real-time analytics to refine your approach and boost your
            chances of success.
          </Text>
          <GetEarlyAccessLink />
        </VStack>
        <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
          <CustomImage imgAlt="dashboard" imgLink="././dashboard.png" />
        </Box>
      </Flex>
    </Flex>
  );
};

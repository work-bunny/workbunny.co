import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { CustomImage, GetEarlyAccessLink } from "../Index";

export const Stages = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bgColor="#2631c3"
      overflow="hidden"
    >
      <Flex
        p={{ base: "70px 100px", md: "100px", lg: "100px" }}
        flexDirection={{
          base: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
        gap={8}
      >
        <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
          <CustomImage imgAlt="stages" imgLink="././stages.png" inverted />
        </Box>
        <VStack w={{ base: "100%", md: "100%", lg: "50%" }} gap={5}>
          <Text
            textAlign="right"
            color="#fff"
            fontWeight="bold"
            fontSize={{ base: "30px", md: "45px", lg: "50px" }}
            ml="auto"
          >
            Stages Information
          </Text>
          <Text
            color="#fff"
            fontSize={{ md: "19px", lg: "20px" }}
            textAlign="right"
          >
            Discover what’s trending at every stage of the job search process in
            your desired market—from initial searches to interviews and
            navigating offers. Share your experiences, gain insights, and even
            earn rewards as you contribute valuable information about your
            current stage in the journey.
          </Text>
          <GetEarlyAccessLink inverted />
        </VStack>
      </Flex>
    </Flex>
  );
};

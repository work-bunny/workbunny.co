import { Box, Text, VStack } from "@chakra-ui/react";
import styles from "./Home.module.css";
import { css } from "@emotion/react";
import { Form } from "../Index";

export const Home = () => {
  return (
    <Box mt="30px" id="home">
      <VStack gap="50px">
        <VStack fontSize={{ base: "38px", md: "70px", lg: "80px" }}>
          <h1 className={styles.title}>Transforming the</h1>
          <Text
            fontWeight="bold"
            css={css`
              background: linear-gradient(to right, purple, #2631c3);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
          >
            Job Search Process
          </Text>
        </VStack>
        <Text
          w={{ base: "90%", md: "700px", lg: "850px" }}
          textAlign="center"
          fontSize={{ base: "19px", md: "20px", lg: "22px" }}
          color="gray.500"
        >
          Discover how professionals in your field are landing jobs. Track your
          applications, share insights about your job search journey, and get
          paid for it!
        </Text>
        <Form />
      </VStack>
    </Box>
  );
};

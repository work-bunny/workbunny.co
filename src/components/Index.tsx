import { HStack, Image, Text } from "@chakra-ui/react";
import { content } from "../data/Index";

export const Helmet = ({ name }: { name: string }) => {
  return (
    <HStack p={5} justifyContent={{ base: "center", md: "left", lg: "left" }}>
      <Image
        h="45px"
        w="45px"
        src="https://img.icons8.com/glyph-neue/512/2631c3/year-of-rabbit.png"
        alt="bunny-logo"
      />
      <Text
        fontSize="28px"
        fontWeight="bold"
        color="#2631c3"
        display={{ base: "none", md: "inline", lg: "inline" }}
      >
        {name}
      </Text>
    </HStack>
  );
};

export const Content = () => {
  return (
    <>
      <Text
        fontSize={{ base: "28px", md: "35px", lg: "40px" }}
        fontWeight="bold"
        color="#2631c3"
      >
        {content.title}
      </Text>
      <Text fontSize={{ base: "18px", md: "20px", lg: "25px" }}>
        {content.text_start}
        <Text as="span" color="#2631c3" fontWeight="semibold">
          {content.span_start}
        </Text>
        {content.text_end}
        <Text as="span" color="#2631c3" fontWeight="semibold">
          {content.span_end}
        </Text>
      </Text>
    </>
  );
};

import { Box, Button, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import React from "react";

export const FormInput = ({ ...p }) => {
  return <Input w="100%" border="1px solid" fontWeight="bold" {...p} />;
};

export const FormTextarea = ({ ...p }) => {
  return <Textarea w="100%" border="1px solid" fontWeight="bold" {...p} />;
};

interface FormProps {
  title: string;
  desc: string;
  btn: string;
  link: string;
  submitting: boolean;
  onClick?: () => void;
  children: JSX.Element[] | JSX.Element;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form = React.forwardRef(
  (
    {
      title,
      desc,
      onSubmit,
      children,
      btn,
      onClick,
      link,
      submitting,
    }: FormProps,
    ref: any
  ) => {
    return (
      <VStack spacing={5} mt={{ base: "50px", md: 0, lg: 0 }}>
        <Text
          fontSize={{ base: "25px", md: "30px", lg: "35px" }}
          fontWeight="bold"
          color="#2631c3"
        >
          {title}
        </Text>
        <Text fontSize={{ base: "17px", md: "18px", lg: "20px" }}>{desc}</Text>
        <Box w="100%" p={{ base: "0 5px", md: 0, lg: 0 }}>
          <form onSubmit={onSubmit} ref={ref}>
            <VStack spacing={8}>
              {children}
              <Button
                w="100%"
                bgColor="#2631c3"
                _hover={{ bgColor: "#3c47e5" }}
                color="white"
                type="submit"
                isLoading={submitting}
                isDisabled={submitting}
              >
                {btn}
              </Button>
              <Text
                cursor="pointer"
                textDecor="underline"
                color="#2631c3"
                fontWeight="bold"
                fontSize={{ base: "15px", md: "16px", lg: "18px" }}
                onClick={onClick}
              >
                {link}
              </Text>
            </VStack>
          </form>
        </Box>
      </VStack>
    );
  }
);

import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

interface HelmetProps {
  name: string;
  inverted?: boolean;
}

export const Helmet = ({ name, inverted }: HelmetProps) => {
  return (
    <HStack p={5} justifyContent={{ base: "center", md: "left", lg: "left" }}>
      <Image
        h="45px"
        w="45px"
        src={`https://img.icons8.com/glyph-neue/512/${
          inverted ? "ffffff" : "2631c3"
        }/year-of-rabbit.png`}
        alt="bunny-logo"
      />
      <Text
        fontSize="28px"
        fontFamily="sans-serif"
        fontWeight="extrabold"
        color={inverted ? "#fff" : "#2631c3"}
        display={{ base: "none", md: "inline", lg: "inline" }}
      >
        {name}
      </Text>
    </HStack>
  );
};

export const Form = () => {
  const toast = useToast();
  const base = useRef<HTMLFormElement | null>(null);
  const mobile = useRef<HTMLFormElement | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    let form = base.current ? base : mobile;

    if (form.current) {
      emailjs
        .sendForm(
          "service_bcy2zny",
          "template_ogbbr6e",
          form.current,
          "CkfjlBXlL7vmevlMk"
        )
        .then(
          (result) => {
            console.log(result);
            if (result.text == "OK") {
              setSubmitting(false);
              toast({
                title: "Your email has been sent, thank you!",
                status: "success",
                position: "top",
                duration: 5000,
                isClosable: true,
              });
            }
            form.current?.reset();
          },
          (error) => {
            console.error(error);
            setSubmitting(false);
            toast({
              title: "Something went wrong, please try again",
              status: "error",
              position: "top",
              duration: 5000,
              isClosable: true,
            });
          }
        );
    }
  };

  return (
    <>
      <Box display={{ base: "none", md: "inline", lg: "inline" }}>
        <form ref={base} style={{ width: "650px" }} onSubmit={handleSubmit}>
          <HStack w="100%">
            <Input
              h="80px"
              name="email"
              type="email"
              placeholder="What is your Email?"
              border="2px solid black"
              required
            />
            <Button
              h="60px"
              w="200px"
              ml="-220px"
              zIndex={10}
              color="#ffff"
              type="submit"
              bgColor="#2631c3"
              isLoading={submitting}
              _hover={{ bgColor: "#333fd7" }}
            >
              Get early access
            </Button>
          </HStack>
        </form>
      </Box>
      <Box display={{ base: "inline", md: "none", lg: "none" }} w="80%">
        <form ref={mobile} style={{ width: "100%" }} onSubmit={handleSubmit}>
          <VStack w="100%">
            <Input
              h="60px"
              name="email"
              type="email"
              placeholder="What is your Email?"
              border="2px solid black"
              required
            />
            <Button
              mt={5}
              w="100%"
              h="60px"
              color="#ffff"
              type="submit"
              bgColor="#2631c3"
              isLoading={submitting}
              _hover={{ bgColor: "#333fd7" }}
            >
              Get early access
            </Button>
          </VStack>
        </form>
      </Box>
    </>
  );
};

export const GetEarlyAccessLink = ({
  inverted = false,
}: {
  inverted?: boolean;
}) => {
  return (
    <Link
      href="#nav"
      mr={!inverted ? "auto" : 0}
      ml={inverted ? "auto" : 0}
      _hover={{
        textDecor: "underline",
        textDecorationColor: inverted ? "#fff" : "#2631c3",
      }}
    >
      <HStack
        color={inverted ? "#fff" : "#2631c3"}
        fontWeight="semibold"
        gap={2}
        _hover={{ gap: 3 }}
      >
        {inverted && <MoveLeftIcon />}
        <Text>Get early access</Text>
        {!inverted && <MoveRightIcon />}
      </HStack>
    </Link>
  );
};

interface CustomImageProps {
  imgAlt: string;
  imgLink: string;
  inverted?: boolean;
}

export const CustomImage = ({
  imgAlt,
  imgLink,
  inverted = false,
}: CustomImageProps) => {
  return (
    <Flex
      h={{ base: "150px", md: "280px", lg: "280px" }}
      maxW={{ md: "600px", lg: "600px" }}
      minW={{ base: "400px" }}
      ml={{ base: 0, md: inverted ? "auto" : 0, lg: "auto" }}
      bgImage={
        inverted ? "linear-gradient(to bottom right, #fff, #dce1fc, #fff)" : ""
      }
      bgColor="#2631c3"
      borderRadius="15px"
      alignItems="flex-end"
      justifyContent="center"
    >
      <Image
        h={{ base: "85%", md: "200px", lg: "200px" }}
        w={{ base: "95%", md: "550px", lg: "550px" }}
        ml="auto"
        alt={imgAlt}
        src={imgLink}
        border="1px solid #2631c3"
        borderBottomRightRadius="15px"
      />
    </Flex>
  );
};

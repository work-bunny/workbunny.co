import { Button, Flex, Link } from "@chakra-ui/react";
import { Helmet } from "./Index";

export const Navbar = () => {
  return (
    <Flex px={5} h="100px" alignItems="center" justifyContent="space-between" id="nav">
      <Helmet name="WORK BUNNY" />
      <Link href="#home">
        <Button
          size="lg"
          color="#fff"
          bgColor="#2631c3"
          fontSize="14px"
          _hover={{ bgColor: "#333fd7" }}
        >
          Get early access
        </Button>
      </Link>
    </Flex>
  );
};

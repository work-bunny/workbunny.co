import { Box, Divider, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

interface FooterIconProps {
  icon: React.ReactNode;
  link: string;
}

export const FooterIcon = ({ icon, link }: FooterIconProps) => {
  return (
    <Link href={link} target="_blank">
      <Box border="3px solid #2631c3" borderRadius="50%">
        <Box
          p={{ base: 1, md: 1, lg: 2 }}
          color="black"
          _hover={{ color: "#2631c3" }}
        >
          {icon}
        </Box>
      </Box>
    </Link>
  );
};

interface FooterData {
  icon: React.ReactNode;
  link: string;
}

export const Footer = ({ ...p }) => {
  const date = new Date();

  const data: FooterData[] = [
    { icon: <Github />, link: "https://github.com/work-bunny" },
    { icon: <Linkedin />, link: "https://www.linkedin.com/company/work-bunny" },
    { icon: <Twitter />, link: "https://twitter.com/work_bunny" },
  ];

  return (
    <Box {...p} mb={{ base: 8, md: 8, lg: 0 }}>
      <VStack
        mt={{ base: "50px", md: 0, lg: 0 }}
        p={{ base: "0 15px", lg: "0 50px 35px 25px" }}
        alignItems="left"
      >
        <Divider color="black" border="1px" />
        <HStack spacing={3}>
          {data.map((item, index) => (
            <FooterIcon key={index} icon={item.icon} link={item.link} />
          ))}
          <Text color="gray" fontWeight="bold">
            © Work Bunny {date.getFullYear()}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

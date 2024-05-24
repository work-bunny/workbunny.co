import { Box } from "@chakra-ui/react";
import { Home } from "./components/sections/Home";
import { Navbar } from "./components/Navbar";
import { Discover } from "./components/sections/Discover";
import { Dashboard } from "./components/sections/Dashboard";
import { Stages } from "./components/sections/Stages";
import { EarlyAccess } from "./components/sections/EarlyAccess";
import { Footer } from "./components/sections/Footer";

export const App = () => {
  return (
    <Box
      fontFamily="sans-serif"
      bgImage="linear-gradient(to bottom right, #fff,#fff, #dce1fc, #fff,  #fff)"
    >
      <Navbar />
      <Home />
      <Discover />
      <Dashboard />
      <Stages />
      <EarlyAccess />
      <Footer />
    </Box>
  );
};

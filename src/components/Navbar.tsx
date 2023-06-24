import logo from "../assets/logo.svg";
import { HStack, Image, Text } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" />
      <Text>Hello</Text>
    </HStack>
  );
};

export default Navbar;

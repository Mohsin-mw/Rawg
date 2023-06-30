import logoWhite from "../assets/logo-white.svg";
import logoBlack from "../assets/logo-black.svg";
import { HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const Navbar = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack padding="10px 20px">
      <Image src={colorMode == "dark" ? logoWhite : logoBlack} boxSize="30px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;

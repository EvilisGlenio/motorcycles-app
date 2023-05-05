import { Box, Center, Image } from "@chakra-ui/react";

function Header() {
  return (
    <Box pt="32px" h="calc(120px + 32px)">
      <Center
        w="120px"
        m="auto"
        bgImage="linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%)"
        borderRadius="50%"
        p="4px"
        transition="transform .3s"
        _hover={{ transform: "scale(1.1)" }}
        animation="fromTop .7s .2s backwards"
      >
        <Image
          w="100%"
          borderRadius="50%"
          src="https://avatars.githubusercontent.com/u/69771563?v=4"
          alt="Foto de Evilis Glenio"
        />
      </Center>
    </Box>
  );
}

export default Header;

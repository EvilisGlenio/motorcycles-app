import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";

function Section(props) {

  return (
    <Grid
      color="white"
      bgImage="linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%)"
      paddingTop="4px"
      borderRadius="10px"
      animation="fromBottom .7s backwards"
    >
      <GridItem
        bgColor="#2A2634"
        padding="32px"
        paddingTop="24px"
        borderRadius="8px"
      >
        <Heading as="h1" fontSize="1.4rem" letterSpacing="-0.47px">
          {props.title}
        </Heading>
        <Text as="p" letterSpacing="-0.18px" color="#A1A1AA">
          {props.subtitle}
        </Text>
        <Flex class="games-list" flexWrap="wrap" gap="16px" marginTop="24px">
          {props.children}
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default Section;

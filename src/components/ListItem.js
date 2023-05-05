import { Link, Image, Box } from "@chakra-ui/react";

function ListItem(props) {
  return (
    <Box transition="transform .3s" _hover={{ transform: "scale(1.1)" }}>
      <Link
        target="_blank"
        href={props.href}
      >
        <Image
          style={props.style}
          src={props.src}
          alt={props.alt}
        />
      </Link>
    </Box>
  );
}

export default ListItem;

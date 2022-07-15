import {
  Heading,
  VStack,
  StackDivider,
  Link,
  UnorderedList,
  ListItem,
  Box,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <VStack
      p={10}
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      <Forms />
    </VStack>
  );
}

function Forms() {
  return (
    <VStack align="stretch">
      <Heading as={"h3"} size={"sm"}>
        <NextLink
          href={"https://chakra-ui.com/docs/components/button"}
          passHref
        >
          <Link>FORMS</Link>
        </NextLink>
      </Heading>
      <Divider />
      <Box>
        <UnorderedList>
          <ListItem>
            <NextLink href={"/Forms/Input"} passHref>
              <Link>Input</Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href={"/Forms/InputGroup"} passHref>
              <Link>InputGroup</Link>
            </NextLink>
          </ListItem>
        </UnorderedList>
      </Box>
    </VStack>
  );
}

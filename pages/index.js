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
  const componentNames = ["Input", "InputGroup", "Button"];

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
          {componentNames.map((name, nameIdx) => (
            <ListItem key={nameIdx}>
              <NextLink href={`/Forms/${name}`} passHref>
                <Link>{name}</Link>
              </NextLink>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </VStack>
  );
}

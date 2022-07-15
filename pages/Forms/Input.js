import { Stack, Input, Container } from "@chakra-ui/react";
import React from "react";

export default function InputPage() {
  return (
    <Container m={10}>
      <Stack spacing={3}>
        <Input variant="outline" placeholder="Outline" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="flushed" placeholder="Flushed" />
        <Input variant="unstyled" placeholder="Unstyled" />
      </Stack>
    </Container>
  );
}

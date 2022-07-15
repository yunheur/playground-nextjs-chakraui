import { Button, VStack } from "@chakra-ui/react";
import React from "react";

export default function ButtonPage() {
  return (
    <VStack align="stretch" spacing={4}>
      <Button>default</Button>
      <Button size={"xl"} variant={"with-shadow"}>
        xl, with-shadow
      </Button>
      <Button variant={"solid"}>solid</Button>
      <Button variant={"sm"}>sm</Button>
      <Button variant={"left-icon"}>left-icon</Button>
    </VStack>
  );
}

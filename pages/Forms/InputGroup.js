import React from "react";
import {
  Stack,
  InputLeftElement,
  Input,
  InputGroup as _InputGroup,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";

export default function InputGroupPage() {
  return (
    <Stack spacing={3}>
      <_InputGroup>
        <InputLeftElement pointerEvents="none">
          <PhoneIcon color="gray.300" />
        </InputLeftElement>
        <Input type="tel" placeholder="Phone number" />
      </_InputGroup>
    </Stack>
  );
}

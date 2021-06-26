import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Pedro Arthur</Text>
        <Text color="gray.300" fontSize="small">
          pedroarthur06@alu.ufc.br
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Pedro Arthur"
        src="https://github.com/pedroor.png"
      />
    </Flex>
  );
}

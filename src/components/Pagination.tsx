import { Button, HStack, Stack, Box } from "@chakra-ui/react";

export function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          colorScheme="pink"
          width="4"
          disabled
          _disabled={{ bgColor: "pink.500", cursor: "default" }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          bgColor="gray.700"
          _hover={{ bg: "gray.500" }}
          width="4"
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          bgColor="gray.700"
          _hover={{ bg: "gray.500" }}
          width="4"
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          bgColor="gray.700"
          _hover={{ bg: "gray.500" }}
          width="4"
        >
          4
        </Button>
      </Stack>
    </HStack>
  );
}

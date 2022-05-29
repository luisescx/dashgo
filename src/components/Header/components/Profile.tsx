import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Luis Escx</Text>

        <Text color="gray.300" fontSize="small">
          luis@email.com
        </Text>
      </Box>

      <Avatar size="md" name="luisescx" src="https://github.com/luisescx.png" />
    </Flex>
  );
}

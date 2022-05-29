import { Flex } from "@chakra-ui/react";
import { Logo } from "./components/Logo";

import { NotificationsNav } from "./components/NotificationsNav";
import { Profile } from "./components/Profile";
import { SearchBox } from "./components/SearchBox";

export function Header() {
  return (
    <>
      <Flex
        as="header"
        w="100%"
        maxWidth={1480}
        h="20"
        mx="auto"
        mt="4"
        px="6"
        align="center"
      >
        <Logo />

        <SearchBox />

        <Flex align="center" ml="auto">
          <NotificationsNav />

          <Profile />
        </Flex>
      </Flex>
    </>
  );
}

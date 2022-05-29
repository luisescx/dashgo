import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";
import { NavLink } from "./components/NavLink";
import { NavSection } from "./components/NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine} title="Dashboard" />

          <NavLink icon={RiContactsLine} title="Usuários" />
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine} title="Formulários" />

          <NavLink icon={RiContactsLine} title="Automação" />
        </NavSection>
      </Stack>
    </Box>
  );
}

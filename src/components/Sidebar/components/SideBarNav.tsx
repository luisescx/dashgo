import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
} from "react-icons/ri";

export function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine} title="Dashboard" />

        <NavLink href="/users" icon={RiContactsLine} title="Usuários" />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink href="/forms" icon={RiInputMethodLine} title="Formulários" />

        <NavLink href="/automation" icon={RiContactsLine} title="Automação" />
      </NavSection>
    </Stack>
  );
}

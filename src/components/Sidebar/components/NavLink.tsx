import { Icon, Link, LinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends LinkProps {
  title: string;
  icon: ElementType;
}

export function NavLink({ title, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" {...rest}>
      <Icon as={icon} fontSize="20" />

      <Text ml="4" fontWeight="medium">
        {title}
      </Text>
    </Link>
  );
}

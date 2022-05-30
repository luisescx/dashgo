import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect } from "react";

interface SideBarProviderProps {
  children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn;

export const SideBarDrawerContext = createContext(
  {} as SideBarDrawerContextData
);

export function SideBarDrawerProvider({ children }: SideBarProviderProps) {
  const disclosure = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  );
}

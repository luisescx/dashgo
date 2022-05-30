import { ReactNode } from "react";
import { SideBarDrawerProvider } from "./SideBarDrawerContext";

interface ContextsProps {
  children: ReactNode;
}

const Contexts: React.FC<ContextsProps> = ({ children }) => {
  return <SideBarDrawerProvider>{children}</SideBarDrawerProvider>;
};

export default Contexts;

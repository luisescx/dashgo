import { useContext } from "react";
import { SideBarDrawerContext } from "../contexts/SideBarDrawerContext";

const useSideBarDrawer = () => {
  const context = useContext(SideBarDrawerContext);

  if (context) {
    return context;
  }

  throw new Error("Sidebar Drawer provider must be setter.");
};

export default useSideBarDrawer;

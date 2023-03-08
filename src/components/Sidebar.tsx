import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useRef } from "react";
import DashboardSidebar from "./Sidebar/DashboardSidebar";
import MenuSidebar from "./Sidebar/MenuSidebar";

const Sidebar = () => {
  return (
    <Flex
      direction="column"
      width={"200px"}
      height={"100vh"}
      bgColor={"#FFCBCB"}
      justifyContent={'flex-start'}
      position={'relative'}
    >
      <Box>
        <DashboardSidebar />
        <MenuSidebar />
      </Box>
    </Flex>
  );
};

export default Sidebar;

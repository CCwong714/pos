import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import TabMenu from "../components/TabMenu";
import Dashboard from "./Dashborad";

const MainMenu = () => {
  return (
    <>
      <Flex flexDirection={"column"} width={"100vw"}>
        <Box
          height={"50px"}
          bg={"#FFB2B2"}
          // width={"99vw"}
          top="0"
          left="0"
          right="0"
        >
          <Text textAlign={"center"} marginTop={"1vh"}>
            Main Menu
          </Text>
        </Box>
        <Flex flexDirection={"row"} height={"100%"}>
            <TabMenu />
          {/* <Box width={"30vw"} height={'100%'}> */}
            <Dashboard />
          {/* </Box> */}
        </Flex>
      </Flex>
    </>
  );
};

export default MainMenu;

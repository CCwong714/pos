import {
  Box,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import MenuDisComp from "./MenuDisComp";

const TabMenu = () => {
  return (
    <Tabs variant="enclosed" bg={"#B6B6B6"} width={"70vw"}>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
          >
            <MenuDisComp
              title={"Set A"}
              image={
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              price={"RM 12.80"}
            />
            <MenuDisComp
              title={"Set A"}
              image={
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              price={"RM 12.80"}
            />
            <MenuDisComp
              title={"Set A"}
              image={
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              price={"RM 12.80"}
            />
            <MenuDisComp
              title={"Set A"}
              image={
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              price={"RM 12.80"}
            />
            <MenuDisComp
              title={"Set A"}
              image={
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              price={"RM 12.80"}
            />
            <MenuDisComp
              title={"Set A"}
              image={
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              price={"RM 12.80"}
            />
            <MenuDisComp
              title={"Set A"}
              image={
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              price={"RM 12.80"}
            />
          </SimpleGrid>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabMenu;

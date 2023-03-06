import React from "react";
import logo from "./logo.svg";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./index";
import uuid from "react-uuid";
import { setTable1 } from "./features/tableSlice";
import OrderComponent from "./components/tableOrder/OrderComponent";

function App() {
  const dispatch = useDispatch();
  const table1 = useSelector((state: RootState) => state.table.table1.order);
  console.log(table1);
  return (
    <Box>
      <OrderComponent Name="watermalon" />
      <OrderComponent Name="apple" />
      <OrderComponent Name="orange" />
      <Box>
        {table1.map((item: any) => {
          return (
            <Box>
              <>{console.log("123", item)}</>
              <Flex flexDirection="row" justifyContent="space-between">
                <Text color="green.900">{item.name}</Text>
                <Text>RM {item.price}</Text>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default App;

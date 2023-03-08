import React from "react";
import logo from "./logo.svg";
import { Box, Button, Checkbox, Flex, Image, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./index";
import uuid from "react-uuid";
import { setTable1 } from "./features/tableSlice";
import OrderComponent from "./components/tableOrder/OrderComponent";
import ChickenRice from "./assets/chickenRice.jpg";
import Json from "./json/order.json";

function App() {
  const dispatch = useDispatch();
  const table1 = useSelector((state: RootState) => state.table.table1.order);
  console.log(table1);
  console.log(Json);
  return (
    <Box>
      <OrderComponent
        Name="Chicken Rice"
        src={ChickenRice}
        itemPrice={1 + 1 + 2 + 3}
      >
        <>
          {Json.data[0].PCSO.map((item: any, index: number) => {
            return <Checkbox value={item.id}>{item.id}</Checkbox>;
          })}
        </>
        <Checkbox value="Add Rice">Add Rice</Checkbox>
        <Checkbox value="Add Egg">Add Egg</Checkbox>
        <Checkbox value="Add Chicken">Add Chicken</Checkbox>
        <Checkbox value="Add Pig">Add Pig</Checkbox>
        <Checkbox value="Add HotDog">Add Hotdog</Checkbox>
      </OrderComponent>
      <OrderComponent Name="apple" src={ChickenRice} itemPrice={1 + 2 + 3 + 4}>
        <Text>123</Text>
      </OrderComponent>
      <OrderComponent Name="orange" src={ChickenRice} itemPrice={4 + 1 + 3 + 3}>
        <Text>123</Text>
      </OrderComponent>
      <Box>
        {table1.map((item: any, index: number) => {
          return (
            <Box key={index}>
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

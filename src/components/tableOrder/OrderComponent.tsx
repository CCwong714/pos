import { Box, Button, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { RootState } from "../..";
import { setTable1 } from "../../features/tableSlice";

interface OrderType {
  Name: string;
}

const OrderComponent: FC<OrderType> = ({ Name }) => {
  const dispatch = useDispatch();
  return (
    <Box>
      <Text>{Name}</Text>
      <Button
        backgroundColor="#00FF91"
        onClick={() => {
          dispatch(
            setTable1({ name: Name, price: 12.3, quantity: 2, id: uuid() })
          );
        }}
      >
        +
      </Button>
    </Box>
  );
};

export default OrderComponent;

import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, {
  Children,
  FC,
  ReactChild,
  ReactChildren,
  ReactNode,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { RootState } from "../..";
import { setTable1 } from "../../features/tableSlice";

interface OrderType {
  Name: string;
  children: ReactNode;
  src: string;
  itemPrice: string | number;
}

const OrderComponent: FC<OrderType> = ({ Name, children, src, itemPrice }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box onClick={onOpen}>
        <Text fontSize={24}>{Name}</Text>
        <Image src={src} height={150} width={150} />
        {/* <Button
        backgroundColor="#00FF91"
        onClick={() => {
          dispatch(
            setTable1({ name: Name, price: 12.3, quantity: 2, id: uuid() })
          );
        }}
      >
        +
      </Button> */}
      </Box>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent padding={5}>
          <ModalBody>
            <>
              <Image src={src} height={150} width="100%" />
              <Text
                fontSize={21}
                fontWeight="bold"
                textAlign="right"
                // color="blue.500"
              >
                RM {itemPrice}
              </Text>
              <Text fontSize={18} fontWeight="bold">
                Chicken Rice
              </Text>
              {children}
            </>
          </ModalBody>
          <ModalFooter>
            <Button
              backgroundColor="blue.500"
              color="white"
              marginRight={5}
              onClick={() => {
                console.log("add done");
              }}
            >
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OrderComponent;

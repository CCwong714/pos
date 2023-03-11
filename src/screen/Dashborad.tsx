import { Box, Flex, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Flex flexDirection={"column"} height={"100%"} width={"30vw"}>
      <Box height={"51px"}>
        <Text color={"#000000"} textAlign={"center"} marginTop={"1.1vh"}>
          Table Number
        </Text>
      </Box>

      <Box height={"80%"} bg={"#000000"}>
        <Text color={"#FFFFFF"} textAlign={"center"}>
          Order Details
        </Text>
      </Box>
    </Flex>
  );
};

export default Dashboard;

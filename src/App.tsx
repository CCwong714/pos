import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./index";
import { setValue } from "./features/adminSlice";
import Sidebar from "./components/Sidebar";
import Dashboard from "./screen/Dashborad";
import Login from "./screen/Login";
import LinkRoute from "./LinkRoute";

function App() {
  const dispatch = useDispatch();
  const admin = useSelector((state: RootState) => state.admin.value);
  // console.log(admin);
  return (
    <div className="App">
      <header className="App-header">
        {/* <Flex direction={"row"} width={'100vw'}>
          <Sidebar />
          <Dashboard/>
        </Flex> */}
        {/* <Text>Home</Text> */}
          <Login />
      </header>
    </div>
  );
}

export default App;

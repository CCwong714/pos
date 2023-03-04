import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./index";
import { setValue } from "./features/adminSlice";

function App() {
  const dispatch = useDispatch();
  const admin = useSelector((state: RootState) => state.admin.value);
  console.log(admin);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Box>
          <Text>123</Text>
          <Button
            backgroundColor="#00FF91"
            onClick={() => {
              dispatch(setValue({ tableNum: 2, order: "water" }));
            }}
          >
            123
          </Button>
        </Box>
      </header>
    </div>
  );
}

export default App;

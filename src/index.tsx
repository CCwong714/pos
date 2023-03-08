import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import theme from "./utils/theme";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./features/adminSlice";
import LinkRoute from "./LinkRoute";
import Sidebar from "./components/Sidebar";
import Dashboard from "./screen/Dashborad";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});

root.render(
  <BrowserRouter>
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <React.StrictMode>
          <Flex direction={"row"} width={"100vw"}>
            {/* <Sidebar /> */}
            <LinkRoute />
            {/* <App /> */}
          </Flex>
        </React.StrictMode>
      </ChakraProvider>
    </ReduxProvider>
  </BrowserRouter>
);

export type RootState = ReturnType<typeof store.getState>;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

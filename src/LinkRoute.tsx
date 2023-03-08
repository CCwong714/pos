import { Route, Routes } from "react-router-dom";
import App from "./App";
import Dashboard from "./screen/Dashborad";
import MainMenu from "./screen/MainMenu";
import Menu from "./screen/Menu";

export default function LinkRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/MainMenu" element={<MainMenu />} />
      </Routes>
    </>
  );
}

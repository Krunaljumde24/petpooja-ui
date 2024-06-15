import React from "react";
import Home from "./components/Home";
import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
}

export default App;

import React from "react";
import Home from "./components/Home";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="app">
      <Home />
      <Toaster position="top-center" />
      <Outlet />
    </div>
  );
}

export default App;

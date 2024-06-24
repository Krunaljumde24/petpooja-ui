import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Order from "./components/Order.jsx";
import Bill from "./components/Bill.jsx";
import Menu from "./components/Menu.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/order" element={<Order />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/get-bill" element={<Bill />} />
      <Route path="/admin-login" element={<Login />} />
      <Route path="/admin-dashboard" element={<Dashboard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Order from "./components/Order.jsx";
import Bill from "./components/Bill.jsx";
import Menu from "./components/Menu.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SignUp from "./components/SignUp.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import Test from "./components/Test.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Test2 from "./components/Test2.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/order" element={<Order />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/get-bill" element={<Bill />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/test" element={<Test />} />
      <Route path="/test2" element={<Test2 />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

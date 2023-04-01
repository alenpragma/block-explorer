import { Box } from "@mui/material";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import { useSelector } from "react-redux";
import BlockDetails from "./pages/BlockDetails";
import Signin from "./pages/Signin";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/signin" element={<Signin />}></Route>
      <Route index element={<Home />}></Route>
      <Route path="blocks" element={<BlockDetails />}></Route>
    </Route>
  )
);

const App = () => {
  let themeData = useSelector((state) => state.theme);
  return (
    <div className={themeData.themeState === "true" ? "" : "dark bg-liteBlack"}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

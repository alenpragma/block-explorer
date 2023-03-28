import React from "react";
import Navs from "./navbar/Navs";
import { Outlet } from "react-router-dom";
import Banner from "./banner/Banner";

const RootLayout = () => {
  return (
    <div className="dark">
      <Navs />
      <Banner />
      <Outlet />
    </div>
  );
};

export default RootLayout;

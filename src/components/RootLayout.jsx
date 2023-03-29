import React from "react";
import Navs from "./navbar/Navs";
import { Outlet } from "react-router-dom";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";

const RootLayout = () => {
  return (
    <>
      <Navs />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;

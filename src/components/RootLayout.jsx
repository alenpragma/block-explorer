import React from "react";
import Navs from "./navbar/Navs";
import { Outlet } from "react-router-dom";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const RootLayout = () => {
  let [navScroll, setNavScroll] = useState(false);
  let navRef = useRef(null);
  let [navHeight, setNavheight] = useState();
  useEffect(() => {
    setNavheight(navRef.current.clientHeight);
  });
  useEffect(() => {
    let oldScroll = 0;
    window.addEventListener("scroll", () => {
      window.pageYOffset > oldScroll ? setNavScroll(true) : setNavScroll(false);
      oldScroll = window.pageYOffset;
    });
  }, []);
  return (
    <>
      <div
        id="nav-wrapper"
        ref={navRef}
        className={`${navScroll && "up"} duration-500`}
      >
        <Navs />
      </div>
      <div style={{ marginTop: `${navHeight}px` }}>
        <Banner />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;

import React from "react";
import "./banner.css";
import SearchBar from "../filter search bar/SearchBar";

const Banner = () => {
  return (
    <div className="relative banner-bg after:absolute after:top-0 after:w-[100%] after:h-[100%] after:bg-transparentLayer">
      <div className="h-[45vh]  container  ">
        <div className=" relative h-[100%]">
          <div className=" absolute w-[full]  lg:w-[55%] flex items-center   z-[9] h-[100%]">
            <div className="w-full">
              <h4 className="!text-primary font-normal">Mindchain Explorer</h4>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

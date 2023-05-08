import React from "react";
import HomeChartBar from "../components/homeChartBar.jsx/HomeChartBar";
import LatestBlocks from "../components/latest blocks/LatestBlocks";
import LatestTransaction from "../components/latest transactions/LatestTransaction";

const Home = () => {
  return (
    <div>
      <HomeChartBar />

      <div className="container md:flex gap-x-4 mb-5">
        <div className="w-full md:w-[50%]">
          <LatestBlocks />
        </div>
        <div className="w-full md:w-[50%]">
          <LatestTransaction />
        </div>
      </div>
    </div>
  );
};

export default Home;
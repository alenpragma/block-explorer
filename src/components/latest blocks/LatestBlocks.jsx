import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./latestBlock.css";
import { latestBlocks } from "./latestBlockData";

const LatestBlocks = () => {
  return (
    <>
      <div className="w-full rounded-md shadow-lg ">
        <div className="p-3 border-b !border-ashText">
          <h6 className="text-blackBg dark:text-white m-0">Latest Blocks</h6>
        </div>

        <div className="h-[400px] overflow-y-scroll px-2">
          {latestBlocks.map((block) => (
            <div
              className="py-3 flex flex-col md:flex-row gap-y-3 md:gap-y-0 border-b !border-ashText"
              key={block.code}
            >
              <div className="md:w-[25%] flex items-center">
                <div className="mr-2 w-[50px] h-[50px] rounded-md shadow-md flex items-center justify-center text-primaryColor font-semibold">
                  Bk
                </div>
                <div>
                  <Link className="text-primaryColor" to="blocks">
                    {block.code}
                  </Link>
                  <br />
                  <small className="text-ashText ">{block.minsAgo}</small>
                </div>
              </div>
              <div className="md:w-[50%] flex justify-center items-center">
                <div className="text-ashText">
                  Validated By{" "}
                  <span className="text-primaryColor">
                    Validator:<span>{block.ValidatedBy}</span>
                  </span>{" "}
                  <br />
                  <span className="text-primaryColor">
                    {" "}
                    <span>{block.txns}</span> txns
                  </span>{" "}
                  <span>{block.minsAgo}</span>
                </div>
              </div>
              <div className="md:w-[25%] flex items-center justify-end">
                <div className="list-polygon bg-primaryHover   uppercase pl-5 pr-3 pb-1 pt-1 text-[12px] font-semibold text-primaryColor">
                  <span>{block.mind}</span> mind
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-ashText">
          <Button
            className="!mt-[-4px] !capitalize !bg-primaryColor w-full"
            variant="contained"
          >
            View All Blocks
          </Button>
        </div>
      </div>
    </>
  );
};

export default LatestBlocks;

import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./latestTrans.css";
import { LatestTrans } from "./LatestTransData";
import { CgFileDocument } from "react-icons/cg";

const LatestTransaction = () => {
  return (
    <>
      <div className="w-full mt-6 md:mt-0 rounded-md shadow-lg ">
        <div className="p-3 border-b !border-ashText">
          <h6 className="text-blackBg dark:text-white m-0">
            Latest Transactions
          </h6>
        </div>

        <div className="h-[400px] overflow-y-scroll px-2">
          {LatestTrans.map((trans) => (
            <div
              className="py-3 flex flex-col md:flex-row gap-y-3 md:gap-y-0 border-b !border-ashText"
              key={trans.code}
            >
              <div className="md:w-[25%] flex items-center">
                <div className="mr-2 w-[50px] h-[50px] rounded-md shadow-md flex items-center justify-center text-primaryColor font-semibold">
                  Bk
                </div>
                <div>
                  <Link className="text-primaryColor" to={trans.link}>
                    {trans.code}
                  </Link>
                  <br />
                  <small className="text-ashText ">{trans.minsAgo}</small>
                </div>
              </div>
              <div className="md:w-[50%] flex justify-center items-center">
                <div className="text-ashText">
                  From{" "}
                  <span className="text-primaryColor">
                    {trans.from.slice(0, 10)}...
                  </span>{" "}
                  <br />
                  <div className="flex items-center gap-x-1">
                    To{" "}
                    <Link className="text-ashText" to={trans.toLink}>
                      <CgFileDocument />
                    </Link>
                    <span className="text-primaryColor">
                      {trans.to.slice(0, 10)}...
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="md:w-[25%] flex items-center justify-end">
                <div className="list-polygon bg-primaryHover   uppercase pl-5 pr-3 pb-1 pt-1 text-[12px] font-semibold text-primaryColor">
                  <span>{trans.mind}</span> mind
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

export default LatestTransaction;

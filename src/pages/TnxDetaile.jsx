import { Alert, Button } from "@mui/material";
import React, { useState } from "react";

import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineClockCircle,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { CgCopy, CgLock } from "react-icons/cg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "../components/latest transactions/LatestTrans.css";
import { BsClockFill } from "react-icons/bs";
const TnxDetaile = () => {
  let [overView, setOverview] = useState(true);
  let [logs, SetLogs] = useState(false);
  let [seeMore, setSeeMore] = useState(false);
  let [tnxHash, setTnxHash] = useState(
    "0xc9f9c6808c810fcabd6e00fbd1b7fccc2f8d1cd88ac47aca155c87ea6495ab94"
  );
  let [from, setFrom] = useState(
    "0xc9f9c6808c810fcabd6e00fbd1b7fccc2f8d1cd88ac47aca155c87ea6495ab98"
  );
  let [contract, setContract] = useState(
    "0xc9f9c6808c810fcabd6e00fbd1b7fccc2f8d1cd88ac47aca155c87ea6495ab98"
  );

  let seeMoreBtn = () => {
    setSeeMore((prev) => !prev);
  };

  let copyTnxHash = () => {
    toast("Transaction Hash Copied!");
    navigator.clipboard.writeText(tnxHash);
  };

  let copyFrom = () => {
    toast("From address Copied");
    navigator.clipboard.writeText(from);
  };

  let copyContract = () => {
    toast("Contract Copied");
    navigator.clipboard.writeText(from);
  };

  return (
    <div>
      <ToastContainer />
      <div className="container ">
        <div className="w-full relative  mb-9 mt-[-20px] shadow-xl md:rounded-tr-md rounded-b-md px-3 bg-white dark:!bg-liteBlack">
          <div className="p-3 h-[70px] flex text-[12px] md-text-base justify-between items-center w-full md:w-[50%] absolute top-[-70px] rounded-t-md left-0 z-3 border-b dark:text-white text-liteBlack  bg-white dark:!bg-liteBlack">
            <h4 className="font-semibold m-4 text-primaryColor">
              Transaction Details
            </h4>{" "}
          </div>
          <div className="flex gap-x-3 pt-3 pb-3">
            <Button
              variant={`${overView ? "contained" : "outlined"}`}
              onClick={() => {
                setOverview(true);
                SetLogs(false);
              }}
              className="!capitalize "
            >
              Overview
            </Button>
            <Button
              variant={`${logs ? "contained" : "outlined"}`}
              onClick={() => {
                SetLogs(true);
                setOverview(false);
              }}
              className="!capitalize"
            >
              Logs
            </Button>
          </div>
          <ul className="p-0 m-0">
            <li className="py-2 border-b md:flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" /> Transaction
                Hash:
              </div>
              <div className="w-[100%] md:w-[80%] flex gap-x-2 itemsfsdghhdghshg-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                {tnxHash}{" "}
                <CgCopy
                  className="text-[18px] hover:text-ashText"
                  onClick={copyTnxHash}
                />{" "}
                {/* {currentBlockDetails.timeStamp.hourseAgo}(
                {currentBlockDetails.timeStamp.standardTime}) */}
              </div>
            </li>
            <li className="py-2 border-b md:flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" /> Status:
              </div>
              <div className="w-[100%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                <Alert severity="success">Success</Alert>
              </div>
            </li>
            <li className="py-2 border-b md:flex items-center overflow-hidden">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Block:
              </div>
              <div className="w-[100%] md:w-[80%] md:flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                <Link to="/blocks" className="text-primaryColor">
                  1285673
                </Link>
                <div className="list-polygon bg-primaryHover   uppercase pl-10 pr-3 pb-1 pt-1 text-[12px] font-semibold text-primaryColor">
                  <span>421 Block Confirmation</span>
                </div>
              </div>
            </li>
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Time Stamp:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <BsClockFill />
                35 mins ago (2023-05-10T19:11:19.000+0000)
              </div>
            </li>
            <li className="py-2  flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                From:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <Link to="" className="text-primaryColor">
                  {from}
                </Link>{" "}
                <CgCopy
                  className="text-[18px] hover:text-ashText"
                  onClick={copyFrom}
                />
              </div>
            </li>
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                To:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                Contract
                <Link to="" className="text-primaryColor">
                  {contract}
                </Link>{" "}
                <CgCopy
                  className="text-[18px] hover:text-ashText"
                  onClick={copyContract}
                />
              </div>
            </li>
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Value:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <span>0.022541922 CORE ($0.02)</span>
              </div>
            </li>
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Transaction Fee:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <span>0 CORE ( $0)</span>
              </div>
            </li>
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Gas Limit:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <span>fdgsdfgsfdgfd</span>
              </div>
            </li>
            <li className="py-2 border-b md:flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" /> Extra Data:
              </div>
              <div className="w-[100%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                <textarea
                  defaultValue="   Hex:
                  0xd883010001846765746888676f312e31382e36856c696e75780000007f90ce5d54bc7d304117737757e7e3bdefd17cbd990122659cdfa6e6ed6c5b23743ba5172c443be5410960dc518541f00625a1adf39fba47321088f11b59ca1bda3d11cd00
                  ExtraVanity: Øgethgo1.18.6linuxÎ] SignedData:
                  0x54bc7d304117737757e7e3bdefd17cbd990122659cdfa6e6ed6c5b23743ba5172c443be5410960dc518541f00625a1adf39fba47321088f11b59ca1bda3d11cd00"
                  className="w-full h-[150px]"
                  disabled
                ></textarea>
              </div>
            </li>
            {seeMore && (
              <>
                <li className="py-2 border-b md:flex items-center overflow-hidden">
                  <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                    <AiOutlineQuestionCircle className="text-[18px]" /> Hash:
                  </div>
                  <div className="w-[100%] md:w-[80%] md:flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                    0x71f5eaf4b0f0a3329fa795d294ce7cb48f19b920ab54e2845c3771683fe617fd
                  </div>
                </li>
                <li className="py-2 border-b md:flex items-center overflow-hidden">
                  <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                    <AiOutlineQuestionCircle className="text-[18px]" />{" "}
                    Validated by:
                  </div>
                  <div className="w-[100%] md:w-[80%] md:flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                    <Link className="text-primaryColor">
                      0x9eb404b4edfe6d8856d20ee84dca834800331960d941fc64c9c0fd79ad88c681
                    </Link>
                  </div>
                </li>
                <li className="py-2 border-b md:flex items-center overflow-hidden">
                  <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                    <AiOutlineQuestionCircle className="text-[18px]" />{" "}
                    Sha3Uncles:
                  </div>
                  <div className="w-[100%] md:w-[80%] md:flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                    0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347
                  </div>
                </li>
                <li className="py-2 border-b md:flex items-center overflow-hidden">
                  <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                    <AiOutlineQuestionCircle className="text-[18px]" />{" "}
                    StateRoot:
                  </div>
                  <div className="w-[100%] md:w-[80%] md:flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                    0xf452380a2428c4d686231c914c7495f3cfd8fe4fdcfc41d89cb038fce1753067
                  </div>
                </li>
                <li className="py-2 border-b flex items-center">
                  <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                    <AiOutlineQuestionCircle className="text-[18px]" /> Block
                    Nonce:
                  </div>
                  <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center font-semibold text-liteBlack dark:text-white">
                    0
                  </div>
                </li>
              </>
            )}
            <li className="py-2 border-b md:flex items-center">
              <Button
                className=" !capitalize !bg-primaryColor w-full"
                variant="contained"
                onClick={seeMoreBtn}
              >
                {!seeMore ? (
                  <span className="flex items-center">
                    see more&nbsp;
                    <AiOutlineArrowDown />
                  </span>
                ) : (
                  <span className="flex items-center">
                    see less&nbsp;
                    <AiOutlineArrowUp />
                  </span>
                )}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TnxDetaile;

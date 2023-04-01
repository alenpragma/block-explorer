import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineCaretDown,
  AiOutlineClockCircle,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { blockDetails } from "./page demo data/BlockDetailsData";

const BlockDetails = () => {
  let [seeMore, setSeeMore] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  let seeMoreBtn = () => {
    setSeeMore((prev) => !prev);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % blockDetails.length);
  };

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(blockDetails.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentBlockDetails = blockDetails[currentIndex];

  return (
    <>
      <div className="container ">
        <div className="w-full relative  mb-9 mt-[-20px] shadow-xl md:rounded-tr-md rounded-b-md px-3 bg-white dark:!bg-liteBlack">
          <div className="p-3 h-[60px] flex text-[12px] md-text-base justify-between items-center w-full md:w-[50%] absolute top-[-60px] rounded-t-md left-0 z-3 border-b dark:text-white text-liteBlack  bg-white dark:!bg-liteBlack">
            <div className="flex items-center gap-x-2">
              <h5 className="font-normal m-0 ">Block</h5>{" "}
              <span className="text-ashText">
                #{currentBlockDetails.blockHeight}
              </span>
            </div>
            <div className="py-1 px-2 rounded-sm bg-primaryHover flex items-center">
              MIND:$1.72 (
              <span className="text-green-500 flex items-center">
                <AiOutlineCaretDown /> +0.45738%
              </span>
              )
            </div>
          </div>
          <ul className="p-0 m-0">
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" /> Block
                Height:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center font-semibold text-liteBlack dark:text-white">
                {currentBlockDetails.blockHeight}
                <div
                  onClick={handlePrevClick}
                  className="p-2 bg-primaryHover hover:bg-primaryColor text-primaryColor hover:text-white"
                >
                  <FaAngleLeft />
                </div>
                <div
                  onClick={handleNextClick}
                  className="p-2 bg-primaryHover hover:bg-primaryColor text-primaryColor hover:text-white "
                >
                  <FaAngleRight />
                </div>
              </div>
            </li>
            <li className="py-2 border-b md:flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" /> Timestamp:
              </div>
              <div className="w-[100%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                <AiOutlineClockCircle className="text-[18px]" />{" "}
                {currentBlockDetails.timeStamp.hourseAgo}(
                {currentBlockDetails.timeStamp.standardTime})
              </div>
            </li>
            <li className="py-2 border-b md:flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />{" "}
                Transactions:
              </div>
              <div className="w-[100%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                <Link>
                  <div className="p-2 bg-primaryHover hover:bg-primaryColor text-primaryColor hover:text-white">
                    {currentBlockDetails.transactions.tnxs} transactions
                  </div>
                </Link>{" "}
                and{" "}
                <Link>
                  <div className="p-2 bg-primaryHover hover:bg-primaryColor text-primaryColor hover:text-white">
                    {currentBlockDetails.transactions.contractTnxs} contract
                    internal transactions
                  </div>
                </Link>{" "}
                in this block
              </div>
            </li>
            <li className="py-2 border-b md:flex items-center overflow-hidden">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" /> Validated
                by:
              </div>
              <div className="w-[100%] md:w-[80%] md:flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                <Link className="text-primaryColor">
                  {currentBlockDetails.validatedBy.validatedHash}{" "}
                </Link>
                <span className="font-semibold">
                  (Validator: {currentBlockDetails.validatedBy.validator})
                </span>{" "}
                in {currentBlockDetails.validatedBy.timeAgo}
              </div>
            </li>
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Block Reward:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <span>{currentBlockDetails.blockReward}</span>
              </div>
            </li>
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Difficulty:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <span>{currentBlockDetails.difficulty}</span>
              </div>
            </li>
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Total Difficulty:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <span>{currentBlockDetails.totalDifficulty}</span>
              </div>
            </li>
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Size:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <span>{currentBlockDetails.size}</span>
              </div>
            </li>
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Gas Used:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <span>{currentBlockDetails.gasUsed}</span>
              </div>
            </li>
            <li className="py-2 border-b flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" />
                Gas Limit:
              </div>
              <div className="w-[50%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white">
                <span>{currentBlockDetails.gasLimit}</span>
              </div>
            </li>
            <li className="py-2 border-b md:flex items-center">
              <div className="w-[50%] md:w-[20%] text-ashText flex  items-center gap-x-1">
                <AiOutlineQuestionCircle className="text-[18px]" /> Extra Data:
              </div>
              <div className="w-[100%] md:w-[80%] flex gap-x-2 items-center  text-liteBlack dark:text-white mt-[10px] md:mt-0">
                <textarea className="w-full h-[150px]" disabled>
                  Hex:
                  0xd883010001846765746888676f312e31382e36856c696e75780000007f90ce5d54bc7d304117737757e7e3bdefd17cbd990122659cdfa6e6ed6c5b23743ba5172c443be5410960dc518541f00625a1adf39fba47321088f11b59ca1bda3d11cd00
                  ExtraVanity: Øgethgo1.18.6linuxÎ] SignedData:
                  0x54bc7d304117737757e7e3bdefd17cbd990122659cdfa6e6ed6c5b23743ba5172c443be5410960dc518541f00625a1adf39fba47321088f11b59ca1bda3d11cd00
                </textarea>
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
    </>
  );
};

export default BlockDetails;

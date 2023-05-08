import React, { useState, useEffect, useRef } from "react";
import { HiCurrencyDollar } from "react-icons/hi";
import { BsGraphUpArrow } from "react-icons/bs";
import { SiHiveBlockchain } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import Chart from "../Chart/Chart";

import { provider } from "./rpc";

const HomeChartBar = () => {
  const BLOCK_TIME = 3;
  const MIND = "0x05C10A9fde936B244900A9d394E3aa6341D4C6c5";
  // const MIND = '0x0000000000000000000000000000000000000000';
  const [latestBlock, setLatestBlock] = useState(null);
  const [transactionCount, setTransactionCount] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [peerCount, setPeerCount] = useState(0);

  useEffect(() => {
    const getLatestBlock = async () => {
      try {
        const LOCAL_STORAGE_KEY = "unicornxx";
        const blockNumber = await provider.eth.getBlockNumber();
        const block = await provider.eth.getBlock(blockNumber);
        const oldData =
          JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        const newTransactions = block.transactions;
        const allTransactions = [...oldData, ...newTransactions];
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify(allTransactions)
        );
        setTransactionCount(allTransactions.length);
        setLatestBlock(block);

        const supply = await provider.eth.getBalance(MIND);
        setTotalSupply(supply / 10 ** 18);
      } catch (error) {
        console.error(error);
      }
    };

    getLatestBlock();

    const interval = setInterval(() => {
      getLatestBlock();
    }, BLOCK_TIME * 1000);

    const fetchPeerCount = async () => {
      const count = await provider.eth.net.getPeerCount();
      setPeerCount(count);
    };

    fetchPeerCount();

    const peerCountInterval = setInterval(() => {
      fetchPeerCount();
    }, 300000);
  }, []);

  if (!latestBlock) {
    return null;
  }

  return (
    <>
      <div className="container">
        <div className="bg-white dark:!bg-liteBlack drop-shadow-lg mb-4  rounded-md w-full md:flex p-4 mt-[-60px]">
          <div className="md:pr-4 w-full md:w-[33.33333333333333%] md:border-r border-ashText ">
            <div className="flex border-b border-ashText h-[50%]  pb-4">
              <div className="color flex items-center">
                <HiCurrencyDollar className="text-[35px] text-primaryColor mr-3" />
                <div>
                  <p className="uppercase text-ashText m-0">mindchain price</p>
                  <p className="m-0 uppercase text-ashText">
                    <span className="text-blackBg dark:text-white">$1.96</span>{" "}
                    @ 0.0000006918 btc
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mt-4  h-[50%]  ">
              <div className=" flex ">
                <BsGraphUpArrow className="text-[35px] text-primaryColor mr-3" />
                <div>
                  <p className="uppercase text-ashText m-0">
                    MARKET CAP / CIRCULATING SUPPLY
                  </p>
                  <p className="m-0 uppercase text-ashText">
                    <span className="text-blackBg dark:text-white">
                      {totalSupply}
                    </span>{" "}
                    MIND
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:px-4   w-full md:w-[33.33333333333333%] md:border-r border-ashText ">
            <div className="flex  border-b border-ashText h-[50%]  pb-4">
              <div className=" pt-[1.5rem] md:pt-[0]  flex items-center w-full">
                <SiHiveBlockchain className="text-[35px] text-primaryColor mr-3" />
                <div className="w-full ">
                  <div className="flex ">
                    <p className="uppercase  w-[50%] text-ashText m-0">
                      Latest block
                    </p>
                    <p className="uppercase w-[50%] text-ashText m-0 text-end">
                      transactions
                    </p>
                  </div>
                  <div className="flex">
                    <p className="m-0 upperca  w-[50%] text-blackBg dark:text-white">
                      {latestBlock.number}
                    </p>
                    <p className="m-0 uppercase  w-[50%] text-blackBg dark:text-white text-end">
                      {transactionCount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-4 md:!mt-0  h-[50%] ">
              <div className="color flex ">
                <FaUserCircle className="text-[35px] text-primaryColor mr-3" />
                <div>
                  <p className="uppercase text-ashText m-0">
                    active validators
                  </p>
                  <p className="m-0 uppercase text-blackBg dark:text-white">
                    {peerCount}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pl-4   w-full md:w-[33.33333333333333%]  text-ashText ">
            <div className="mt-[25px] md:mt-0 lg:mt-0">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeChartBar;

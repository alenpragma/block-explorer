import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { v4 as uuidv4 } from 'uuid';
//import "./latestTrans.css";
//import { LatestTrans } from "./LatestTransData";
import { BigNumber } from "bignumber.js";
import { provider } from "./rpc";
import { CgFileDocument } from "react-icons/cg";


const LatestTransaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const subscription = provider.eth.subscribe("newBlockHeaders");
    const fetchLatestTransactions = async () => {
      const latestBlockNumber = await provider.eth.getBlockNumber();
      const block = await provider.eth.getBlock(latestBlockNumber, true);
      const txns = block.transactions.map((txn) => {
      return {
      blockNumber: txn.blockNumber,
      from: txn.from,
      to: txn.to,
      value:provider.utils.fromWei(new BigNumber(txn.value).times(new BigNumber(10).pow(18)).toString(), "ether"),
      timestamp: block.timestamp,
      age: Math.round((Date.now() / 1000 - block.timestamp) / 60),
      };
      });
      setTransactions((prevTransactions) => [...prevTransactions, ...txns]);
      };
    
    const interval = setInterval(() => {
    fetchLatestTransactions();
    }, 1000);
    subscription.on("data", () => {
      fetchLatestTransactions();
    });
    
    return () => {
      clearInterval(interval);
      subscription.unsubscribe();
    };
    }, []);
          
  return (
    <>
      <div className="w-full mt-6 md:mt-0 rounded-md shadow-lg ">
        <div className="p-3 border-b !border-ashText">
          <h6 className="text-blackBg dark:text-white m-0">
            Latest Transactions
          </h6>
        </div>

        <div className="h-[400px] overflow-y-scroll px-2">
        {transactions.map((txn, index)  => (
            <div
              className="py-3 flex flex-col md:flex-row gap-y-3 md:gap-y-0 border-b !border-ashText"
              key={index}
            >
              <div className="md:w-[25%] flex items-center">
                <div className="mr-2 w-[50px] h-[50px] rounded-md shadow-md flex items-center justify-center text-primaryColor font-semibold">
                  Tx
                </div>
                <div>
                  <Link className="text-primaryColor">
                  {txn.blockNumber}
                  </Link>
                  <br />
                  <small className="text-ashText "></small>
                </div>
              </div>
              <div className="md:w-[50%] flex justify-center items-center">
                <div className="text-ashText">
                  From{" "}
                  <span className="text-primaryColor">
                  {txn.from.slice(0, 10)}...
                  </span>{" "}
                  <br />
                  <div className="flex items-center gap-x-1">
                    To{" "}
                    <Link className="text-ashText" >
                      <CgFileDocument />
                    </Link>
                    <span className="text-primaryColor">
                    {txn.to.slice(0, 10)}...
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="md:w-[25%] flex items-center justify-end">
                <div className="list-polygon bg-primaryHover   uppercase pl-5 pr-3 pb-1 pt-1 text-[12px] font-semibold text-primaryColor">
                  <span>{provider.utils.fromWei(new BigNumber(txn.value).times(new BigNumber(10).pow(18)).toString(), "ether")}</span> MIND
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

export default LatestTransaction ;
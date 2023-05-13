import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./latestBlock.css";
import { provider } from "./rpc";


//const LatestBlocks = () => {
//  const [latestBlockNumber, setLatestBlockNumber] = useState(0);
 // const [blocks, setBlocks] = useState([]);

 // useEffect(() => {
  

  //  const fetchLatestBlockData = async () => {
    //  const currentBlockNumber = await provider.eth.getBlockNumber();

    //  if (latestBlockNumber !== currentBlockNumber) {
     //   const latestBlock = await provider.eth.getBlock(currentBlockNumber);
       // const latestBlockData = {
       //   number: latestBlock.number,
       //   timestamp: latestBlock.timestamp,
      //    miner: latestBlock.miner,
     //   };

     //   // Add the latest block if it's not already in the queue
     //   if (!blocks.some((block) => block.number === latestBlockData.number)) {
        //  if (blocks.length === 5) {
            // Remove the oldest block from the queue if it's full
         //   setBlocks((prevBlocks) => prevBlocks.slice(0, -1));
       //   }
        //  setBlocks((prevBlocks) => [latestBlockData, ...prevBlocks]);
        //  setLatestBlockNumber(currentBlockNumber);
      //  }
     // }
    //};

   // const interval = setInterval(() => {
   //   fetchLatestBlockData();
   // }, 12000);

  //  return () => clearInterval(interval);
  //}, [latestBlockNumber, blocks]);

  const LatestBlocks = () => {
    const [latestBlockNumber, setLatestBlockNumber] = useState(0);
    const [blocks, setBlocks] = useState(() => {
      const storedBlocks = localStorage.getItem("blocks");
      return storedBlocks ? JSON.parse(storedBlocks) : [];
    });
  
    useEffect(() => {
      const fetchLatestBlockData = async () => {
        const currentBlockNumber = await provider.eth.getBlockNumber();
  
        if (latestBlockNumber !== currentBlockNumber) {
          const latestBlock = await provider.eth.getBlock(currentBlockNumber);
          const latestBlockData = {
            number: latestBlock.number,
            timestamp: latestBlock.timestamp,
            miner: latestBlock.miner,
          };
  
          // Add the latest block if it's not already in the queue
          if (!blocks.some((block) => block.number === latestBlockData.number)) {
            if (blocks.length === 5) {
              // Remove the oldest block from the queue if it's full
              setBlocks((prevBlocks) => prevBlocks.slice(0, -1));
            }
            setBlocks((prevBlocks) => [latestBlockData, ...prevBlocks]);
            setLatestBlockNumber(currentBlockNumber);
            localStorage.setItem("blocks", JSON.stringify([...blocks, latestBlockData]));
          }
        }
      };
  


  const interval = setInterval(() => {
    fetchLatestBlockData();
  }, 12000);

  return () => clearInterval(interval);
}, [latestBlockNumber, blocks]);




  return (
    <>
      <div className="w-full rounded-md shadow-lg ">
        <div className="p-3 border-b !border-ashText">
          <h6 className="text-blackBg dark:text-white m-0">Latest Blocks</h6>
        </div>

        <div className="h-[400px] overflow-y-scroll px-2">
        {blocks.map((block, i ) => (
            <div
              className="py-3 flex flex-col md:flex-row gap-y-3 md:gap-y-0 border-b !border-ashText"
              key={/*block.number**/ i}
            >
              <div className="md:w-[25%] flex items-center">
                <div className="mr-2 w-[50px] h-[50px] rounded-md shadow-md flex items-center justify-center text-primaryColor font-semibold">
                  Bk
                </div>
                <div>
                  <Link className="text-primaryColor" to="blocks">
                  {block.number}
                  </Link>
                  <br />
                  <small className="text-ashText ">{new Date(block.timestamp * 1000).toLocaleString()}</small>
                </div>
              </div>
              <div className="md:w-[50%] flex justify-center items-center">
                <div className="text-ashText">
                  Validated By{" "}
                  <span className="text-primaryColor">
                    Validator:<span> {block && block.miner.slice(0, 10)}...</span>
                  </span>{" "}
                  <br />
                  <span className="text-primaryColor">
                    {" "}
                    <span>{block.txns}</span> txns
                  </span>{" "}
                  <span></span>
                </div>
              </div>
              <div className="md:w-[25%] flex items-center justify-end">
                <div className="list-polygon bg-primaryHover   uppercase pl-5 pr-3 pb-1 pt-1 text-[12px] font-semibold text-primaryColor">
                  <span> </span> mind
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
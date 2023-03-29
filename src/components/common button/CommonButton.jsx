import { Button } from "@mui/material";
import React from "react";

const CommonButton = ({ title, onClick, className }) => {
  return (
    <div>
      <Button
        onClick={onClick}
        variant="contained"
        className={`!bg-white dark:!bg-liteBlack ${className}`}
      >
        <small className="!text-liteBlack dark:!text-white !capitalize">
          {title}
        </small>
      </Button>
    </div>
  );
};

export default CommonButton;

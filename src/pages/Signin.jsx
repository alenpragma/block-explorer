import React, { useState } from "react";
import {
  AiOutlineCaretDown,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Checkbox } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  let [captcha, setCaptcha] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // recaptcha func
  function onChange(value) {
    console.log("Captcha value:", value);
    setCaptcha(value);
  }

  return (
    <>
      <div className="container ">
        <div className="w-full relative  mb-9 mt-[-20px] shadow-xl md:rounded-tr-md rounded-b-md px-3 bg-white dark:!bg-liteBlack">
          <div className="p-3 h-[70px] flex text-[12px] md-text-base justify-between items-center w-full md:w-[50%] absolute top-[-70px] rounded-t-md left-0 z-3 border-b dark:text-white text-liteBlack  bg-white dark:!bg-liteBlack">
            <div className=" gap-x-2">
              <h4 className="font-normal m-0 text-primaryColor">
                Welcome <span className="font-bold ">Back</span>
              </h4>{" "}
              Login to your account
            </div>
            <div className="py-1 px-2 rounded-sm bg-primaryHover flex items-center">
              MIND:$1.72 (
              <span className="text-green-500 flex items-center">
                <AiOutlineCaretDown /> +0.45738%
              </span>
              )
            </div>
          </div>
          <div className="flex justify-center py-4 w-full">
            <div className="flex flex-col gap-y-5 w-full md:w-[50%]">
              <TextField
                className="input"
                required
                id="outlined-required"
                label="Username"
              />
              <TextField
                className="input"
                required
                id="outlined-password-input"
                type={showPassword ? "text" : "password"}
                label="Password"
                InputProps={{
                  endAdornment: (
                    <div
                      className="cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <AiOutlineEye className="text-primaryColor text-[22px]" />
                      ) : (
                        <AiOutlineEyeInvisible className="text-primaryColor text-[22px]" />
                      )}
                    </div>
                  ),
                }}
              />
              <span className="dark:text-white text-liteBlack">
                <Checkbox className="!ml-[-11px]" /> Remember & Auto Login
              </span>
              <div className=" flex flex-col items-center">
                <ReCAPTCHA
                  sitekey=" 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}
                />
                <Button
                  className={`capitali mb-2 !bg-primaryColor !capitalize mt-2 ${!captcha} && text-white `}
                  disabled={!captcha}
                  variant="contained"
                >
                  Sign in
                </Button>
                <span className=" dark:text-white text-liteBlack ">
                  Already have an account?{" "}
                  <Link className="text-primaryColor" to="signup">
                    Click to Sign up
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

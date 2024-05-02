// eslint-disable-next-line no-unused-vars
import React from "react";
import curvyImage from "../../../assets/Vector 1.svg";
import Navbar from "../../Navbar/Navbar";
import image from "../../../assets/Ellipse 2.svg";
import location from "../../../assets/map-pin.svg";

const Welcome = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-64 md:h-96 lg:h-128"
      style={{ backgroundImage: `url(${curvyImage})` }}
    >
      <Navbar></Navbar>
      <div className="flex flex-col items-center gap-y-5 mt-10">
        <div className="text-center text-#000000 font-bold text-2xl">
          <h1>Welcome back!</h1>
        </div>
        <div className="flex flex-row justify-center w-[300px] py-3 px-3 text-#000000 mx-[60px] bg-[#ffffff80] rounded-full">
          <div className="avatar mr-3">
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src={image}
              alt=""
            />
          </div>
          <div className="text-avatar items-center font-bold text-md">
            <h2 className="text-center text-xl">Chandler Bing</h2>
            <div className="flex flex-row gap-y-2 mt-3 items-center">
              <img src={location} alt="" className="mr-1" />
              <p className="text-center text-sm">Los Angeles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

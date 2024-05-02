// eslint-disable-next-line no-unused-vars
import React from "react";
import map from "../../../assets/map-pin-yellow.svg";
import timing from "../../../assets/map-pin-yellow.svg";
import { Button } from "@material-tailwind/react";

const ListStopWel = () => {
  return (
    <div className="container main mb-5">
      <div className="flex justify-center items-center mt-6">
        <h1 className="text-3xl text-#1E293B">List Of Stops</h1>
      </div>
      <div className="grid grid-row-1 justify-center">
        <div className="flex flex-col space-x-3 items-center border border-#9C9C9C m-5 p-4">
          <div className="flex flex-col gap-2 items-center border-b border-#9C9C9C py-3">
            <div className="text-left text-#9C9C9C text-2xl whitespace-nowrap">
              {" "}
              <span className="bg-yellow-400 text-center shadow-md text-#1E293B text-2xl font-bold p-4 mr-2">
                01
              </span>
              <span className="">
                Customer name:{" "}
                <span className="font-semibold text-#1E293B">
                  Shubham Patidar
                </span>
              </span>
            </div>
            <div className="text-left text-text-#9C9C9C  text-2xl mr-4">
              Phone:{" "}
              <span className="font-semibold text-#1E293B">
                +01 123 456 7890
              </span>
            </div>
            <div className="flex flex-row gap-2 text-left mr-8 text-#9C9C9C text-2xl">
              <img src={timing} alt="" className="" />
              <span>19-02-2023 at 01:19</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-center py-3">
            <div className="text-left font-semibold text-2xl text-#1E293B">
              <h2>Delivery Address</h2>
            </div>
            <div className="flex flex-row gap-2 text-left font-sm text-xl text-#9F9F9F">
              <img src={map} alt="" className="" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-x-3 items-center border border-#9C9C9C m-5 p-4">
          <div className="flex flex-col gap-2 items-center border-b border-#9C9C9C py-3">
            <div className="text-left text-#9C9C9C text-2xl whitespace-nowrap">
              {" "}
              <span className="bg-yellow-400 text-center shadow-md text-#1E293B text-2xl font-bold p-4 mr-2">
                02
              </span>
              <span className="">
                Customer name:{" "}
                <span className="font-semibold text-#1E293B">
                  Shubham Patidar
                </span>
              </span>
            </div>
            <div className="text-left text-text-#9C9C9C  text-2xl mr-4">
              Phone:{" "}
              <span className="font-semibold text-#1E293B">
                +01 123 456 7890
              </span>
            </div>
            <div className="flex flex-row gap-2 text-left mr-8 text-#9C9C9C text-2xl">
              <img src={timing} alt="" className="" />
              <span>19-02-2023 at 01:19</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-center py-3">
            <div className="text-left font-semibold text-2xl text-#1E293B">
              <h2>Delivery Address</h2>
            </div>
            <div className="flex flex-row gap-2 text-left font-sm text-xl text-#9F9F9F">
              <img src={map} alt="" className="" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-x-3 items-center border border-#9C9C9C m-5 p-4">
          <div className="flex flex-col gap-2 items-center border-b border-#9C9C9C py-3">
            <div className="text-left text-#9C9C9C text-2xl whitespace-nowrap">
              {" "}
              <span className="bg-yellow-400 text-center shadow-md text-#1E293B text-2xl font-bold p-4 mr-2">
                03
              </span>
              <span className="">
                Customer name:{" "}
                <span className="font-semibold text-#1E293B">
                  Shubham Patidar
                </span>
              </span>
            </div>
            <div className="text-left text-text-#9C9C9C  text-2xl mr-4">
              Phone:{" "}
              <span className="font-semibold text-#1E293B">
                +01 123 456 7890
              </span>
            </div>
            <div className="flex flex-row gap-2 text-left mr-8 text-#9C9C9C text-2xl">
              <img src={timing} alt="" className="" />
              <span>19-02-2023 at 01:19</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-center py-3">
            <div className="text-left font-semibold text-2xl text-#1E293B">
              <h2>Delivery Address</h2>
            </div>
            <div className="flex flex-row gap-2 text-left font-sm text-xl text-#9F9F9F">
              <img src={map} alt="" className="" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn">
        {" "}
        {/* <button className="py-2 px-[120px] mx-10 bg-violet-500 text-white text-2xl font-semibold rounded shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
          START
        </button> */}
        <Button
          color="purple"
          className="py-2 px-[120px] mx-10 text-2xl font-semibold"
        >
          START
        </Button>
      </div>
    </div>
  );
};

export default ListStopWel;

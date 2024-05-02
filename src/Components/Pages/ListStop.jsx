// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/Group 5.svg";
import flagMark from "../../assets/Frame 95.svg";
import mark from "../../assets/task_alt.svg";
import box from "../../assets/package_2.svg";

const ListStop = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 items-center p-6 bg-[#FACE45] text-2xl text-center font-bold">
        <Link to="/" className="flex items-center mx-4">
          <img src={arrow} alt="" />
        </Link>

        <div className="">List Stops</div>
      </div>
      <div className="grid grid-rows-1 justify-center border-2 border-#EBEBEB rounded-xl px-3 py-4 mx-6 my-4">
        <div className="flex flex-row space-x-3 items-center">
          <div className="flex flex-row space-around items-center">
            <div className="text-2xl p-3 font-bold rounded-xl text-[#1E293B] bg-[#FACE45]">
              01
            </div>
            <div className="text-lg p-3 font-semibold text-[#1E293B]">
              4140 Parker Rd. Allentown, New Mexico 31134, United States
            </div>
          </div>
          <div className="w-[50px] h-[50px] mt-3">
            <img src={flagMark} alt="" />
          </div>
        </div>
        <div className="text-xl font-bold w-[50vw] text-center px-2 py-2 text-[#674FA8] rounded-full border-2 border-[#674FA8]">
          Customer Warehouse
        </div>
        <div className="grid grid-cols-2 gap-4  my-4 px-5">
          <div className="flex flex-row gap-2 items-center col-start-1 border-2 border-#EBEBEB py-3 px-5 rounded-full">
            <img src={mark} alt="" className="" />
            <h1 className="text-3xl text-center font-bold text #1E293B">25</h1>
            <h3 className="text-lg text-center text-#61718C">Tasks</h3>
          </div>
          <div className="flex flex-row gap-3 col-start-2 items-center border-2 border-#EBEBEB py-3 pr-5 rounded-full">
            <img src={box} alt="" className="" />
            <h1 className="text-3xl text-center font-bold text- #1E293B">25</h1>
            <h3 className="text-lg text-center text-#61718C">Packages</h3>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 justify-center border-2 border-#EBEBEB rounded-xl px-3 py-4 mx-6 my-4">
        <div className="flex flex-row space-x-3 items-center">
          <div className="flex flex-row space-around items-center">
            <div className="text-2xl p-3 font-bold rounded-xl text-#1E293B bg-[#FACE45]">
              02
            </div>
            <div className="text-lg p-3 font-semibold text-[#1E293B]">
              4140 Parker Rd. Allentown, New Mexico 31134, United States
            </div>
          </div>
          <div className="w-[50px] h-[50px] mt-3">
            <img src={flagMark} alt="" />
          </div>
        </div>
        <div className="text-xl font-bold w-[50vw] text-center px-2 py-2 text-[#674FA8] rounded-full border-2 border-[#674FA8]">
          Customer Warehouse
        </div>
        <div className="grid grid-cols-2 gap-4  my-4 px-5">
          <div className="flex flex-row gap-2 col-start-1 items-center border-2 border-#EBEBEB py-3 px-5 rounded-full">
            <img src={mark} alt="" className="" />
            <h1 className="text-3xl font-bold text-center text- #1E293B">25</h1>
            <h3 className="text-lg text-center text-#61718C">Tasks</h3>
          </div>
          <div className="flex flex-row gap-3 col-start-2 items-center border-2 border-#EBEBEB py-3 pr-5 rounded-full">
            <img src={box} alt="" className="" />
            <h1 className="text-3xl font-bold text-center text-#1E293B">25</h1>
            <h3 className="text-lg text-center text-#61718C">Packages</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListStop;

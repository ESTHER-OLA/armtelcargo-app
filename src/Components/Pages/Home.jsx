// eslint-disable-next-line no-unused-vars
import React from "react";
import vector from "../../assets/Vector.svg";
import boxplus from "../../assets/Group.svg";
import boxminus from "../../assets/Group2.svg";
import locdis from "../../assets/pin-distance.svg";
import timing from "../../assets/Vector 2.svg";
import Welcome from "./Main.jsx/Welcome";
import ListStopWel from "./Main.jsx/ListStopWel";

const Home = () => {
  return (
    <div>
      <div className="pb-8" style={{ backgroundColor: "#FFF8E0" }}>
        <Welcome></Welcome>
        <div className="pb-8" style={{ backgroundColor: "#FFF8E0" }}>
          <div className="flex justify-center items-center mt-5">
            <h1 className="text-3xl">Job Summary</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center mt-6 px-5">
            <div className="flex flex-row gap-3 items-center bg-[#ffff] py-3 px-3 rounded-full">
              <img src={vector} alt="" className="" />
              <h1 className="text-3xl font-bold text-background: #1E293B">
                25
              </h1>
              <h3 className="text-lg text-#61718C">Total Stop</h3>
            </div>
            <div className="flex flex-row space-x-3 items-center bg-[#ffff] py-3 px-3 rounded-full">
              <img src={boxplus} alt="" className="" />
              <h1 className="text-3xl font-bold text-background: #1E293B">
                25
              </h1>
              <h3 className="text-lg text-#61718C">Total Pickups</h3>
            </div>
            <div className="flex flex-row space-x-3 items-center bg-[#ffff] py-3 px-3 rounded-full">
              <img src={boxminus} alt="" className="" />
              <h1 className="text-3xl font-bold text-background: #1E293B">
                25
              </h1>
              <h3 className="text-lg text-#61718C">Total Delivery</h3>
            </div>
            <div className="flex flex-row space-x-1 items-center bg-[#ffff] py-3 px-3 rounded-full whitespace-nowrap">
              <img src={locdis} alt="" className="" />
              <h1 className="text-3xl font-bold text-background: #1E293B">
                105
              </h1>
              <h3 className="text-lg text-#61718C">Total Distance</h3>
            </div>
          </div>
          <div className="grid grid-rows-1 justify-center items-center mt-5">
            <div className="flex flex-row space-x-3 items-center bg-[#ffff] py-2 px-3 rounded-full">
              <img src={timing} alt="" className="" />
              <h1 className="text-3xl font-bold text-background: #1E293B">
                4 hrs
              </h1>
              <h3 className="text-lg text-#61718C">Total Distance</h3>
            </div>
          </div>
        </div>
      </div>
      <ListStopWel></ListStopWel>
    </div>
  );
};

export default Home;

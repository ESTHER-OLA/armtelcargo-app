// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/Group 5.svg";
import rectangle from "../../assets/Frame 96.svg";
import rectangledown from "../../assets/Frame 97.svg";
import directionWalk from "../../assets/Frame 2205.svg";
import scanner from "../../assets/Frame 2206.svg";
import marked from "../../assets/Rectangle 350.svg";
import addphoto from "../../assets/add_a_photo.svg";
import addcomment from "../../assets/add_comment.svg";

const Deliveries = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      {" "}
      <div className="flex flex-row gap-4 items-center p-6 bg-[#FACE45] text-2xl text-center font-bold">
        <Link to="/liststop" className="flex items-center mx-4">
          <img src={arrow} alt="" />
        </Link>

        <div className="">Deliveries</div>
      </div>
      <div className="flex flex-row space-x-1 items-center py-3 px-5 rounded-xl my-4 mx-2 border-2 border-#6B4EAE1A">
        <div className="flex flex-row space-around items-center">
          <div className="text-xl p-2 font-bold rounded-xl text-[#1E293B] bg-[#FACE45]">
            01
          </div>
          <div className="text-md text-wrap p-3 font-medium text-[#1E293B]">
            4140 Parker Rd. Allentown, <br /> New Mexico 31134, United{" "}
            {showFullText ? (
              <>&nbsp;States</>
            ) : (
              <>
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={handleClick}
                >
                  ...
                </span>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <div className="text-xl text-center px-2 py-2 rounded-full bg-[#447A3A] text-[#FFFFFF]">
            Completed
          </div>
          <div className="">
            <img src={rectangle} alt="" />
          </div>
        </div>
      </div>
      <div className="rounded-xl mx-2 my-4 border-2 border-#6B4EAE1A">
        <div className="flex flex-row gap-[50px] items-center py-3 px-3">
          <div className="flex flex-row space-around items-center">
            <div className="text-xl p-2 font-bold rounded-xl text-[#1E293B] bg-[#FACE45]">
              02
            </div>
            <div className="text-md text-wrap p-3 font-medium text-[#1E293B]">
              4140 Parker Rd. Allentown, <br /> New Mexico 31134, United{" "}
              {showFullText ? (
                <>&nbsp;States</>
              ) : (
                <>
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={handleClick}
                  >
                    ...
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="text-xl text-center font-bold text-[#1E293B]">
              #123
            </div>
            <div className="">
              <img src={rectangledown} alt="" />
            </div>
          </div>
        </div>

        <div className="text-xl font-bold w-[50vw] text-center px-2 py-2 mb-3 ml-3 text-[#674FA8] rounded-full border-2 border-[#674FA8]">
          Customer Warehouse
        </div>

        <div className="flex flex-col gap-4 items-center pb-3 rounded-xl mb-3 border-2 border-#6B4EAE1A mx-3">
          <div className="flex flex-row gap-12">
            <div className="flex flex-row gap-2">
              <div className="bg-[#FACE4540] p-3 text-2xl font-bold rounded-xl mr-1">
                01
              </div>
              <div className="text-2xl font-bold mt-3 text-[#1E293B] text-nowrap">
                *consignee name*
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <img src={directionWalk} alt="" />
              <img src={scanner} alt="" />
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <div className="rounded-full text-nowrap color-[#6B4EAE] border-2 border-#6B4EAE1A py-3 px-3">
              Customer warehouse
            </div>
            <div className="rounded-full text-nowrap color-[#6B4EAE] border-2 border-#6B4EAE1A py-3 px-3">
              Pickup
            </div>
            <div className="rounded-full text-nowrap color-[#6B4EAE] border-2 border-#6B4EAE1A py-3 px-3">
              #235809523
            </div>
          </div>
        </div>

        <div className="flex flex-row mx-4 px-6 items-center gap-[50px] border  divide-x-2 divide-[#EC8F3A] border-[#EC8F3A] rounded-xl bg-[#fdf6f6]">
          <div className="flex flex-col gap-1 px-5">
            <div className="font-3xl font-medium pt-2 text-center text-nowrap text-[#DF5154]">
              Amount due
            </div>
            <div className="font-3xl font-bold text-center text-[#DF5154] mb-3">
              $243
            </div>
          </div>
          <div className="flex flex-col gap-1 px-10">
            <div className="font-3xl font-medium pt-2 text-center text-nowrap text-[#D6670099]">
              Package status
            </div>
            <div className="flex flex-row gap-2 items-center mb-3 ml-4 text-[#D6670099]">
              <h3 className="font-3xl text-center font-bold">Picked</h3>
              <img className="" src={marked} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-row item-center gap-2 px-6 py-4">
          <div className="flex flex-row item-center gap-2 px-9 py-3 rounded-xl border-2 border-[#6B4EAE]">
            <div className="text-center font-bold font-3xl text-nowrap text-[#6B4EAE]">
              Add Photo
            </div>
            <div className="item-center">
              <img src={addphoto} alt="" />
            </div>
          </div>
          <div className="flex flex-row item-center gap-2 px-9 py-3 rounded-xl border-2 border-[#6B4EAE]">
            <div className="text-center font-bold font-3xl text-nowrap text-[#6B4EAE]">
              Add Comment
            </div>
            <div className="item-center">
              <img src={addcomment} alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 px-4 py-4 border-t-2 border-[#EBEBEB]">
          <div className="text-center text-2xl px-[50px] py-5 text-[#ffff] rounded-xl bg-[#6B4EAE]">
            Cancel
          </div>
          <div className="text-center text-2xl px-[60px] py-5 text-[#ffff] rounded-xl bg-[#6B4EAE]">
            Done
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliveries;

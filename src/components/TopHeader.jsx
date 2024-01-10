import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { RiArrowDownSLine } from "react-icons/ri";

const TopHeader = () => {
  return (
    <div className="bg-black text-white h-12 flex justify-between items-center md:pr-[135px] sm:pr-[44px] pr-[12px] text-sm">
      <div></div>
      <div className=" text-[#d9d9d9]">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="ml-2 text-white underline font-semibold">
          <Link>ShopNow</Link>
        </span>
      </div>
      <div className="flex justify-center items-center">
        <p className=" mr-1">English</p>
        <button className=" text-xl">
          <RiArrowDownSLine />
        </button>
      </div>
    </div>
  );
};

export default TopHeader;

import React from "react";
import { FaApple, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import hero_endframe from "../assets/hero_endframe.png";

const HeaderAD = () => {
  return (
    <div className="mt-10 ml-6">
      <div className="bg-black h-[344px] w-full text-white">
        <div className="flex justify-between pl-16">
          <div className=" pt-[58px] flex flex-col space-y-5">
            <div className="flex items-center">
              <FaApple className=" text-5xl" />
              <p className=" text-[12px] font-extralight ml-3">
                iPhone 14 Series
              </p>
            </div>
            <h1 className=" text-5xl font-semibold">Up to 10% off Voucher</h1>
            <Link>
              <div className="flex items-center">
                <div>
                  <h3 className="text-[16px]">Shop Now</h3>
                  <hr />
                </div>

                <FaArrowRight className="pl-3 text-2xl" />
              </div>
            </Link>
          </div>
          {/* img */}
          <div className="pt-3">
            <img src={hero_endframe} alt="adHero" className=" h-full w-full" />
          </div>
        </div>
        {/* buttons */}
        <div className="flex justify-center items-center pt-4 gap-x-3">
            <button className="w-[10px] h-[10px] bg-slate-400 rounded-full"></button>
            <button className="w-[10px] h-[10px] bg-slate-400 rounded-full"></button>
            <button className="w-[10px] h-[10px] bg-slate-400 rounded-full"></button>
            <button className="w-[10px] h-[10px] bg-slate-400 rounded-full"></button>
            <button className="w-[10px] h-[10px] bg-slate-400 rounded-full"></button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HeaderAD;

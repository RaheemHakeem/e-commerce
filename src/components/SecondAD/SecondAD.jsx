import React from "react";
import jbl from "../../assets/jbl.png";
import "./index.css";

const SecondAD = () => {
  return (
    <div className="jbl_img text-white flex py-[70px] ">
      <div className=" ml-[56px]">
        <h2 className="text-base text-[#00ff66] mb-8">Categories</h2>
        <h1 className="text-5xl font-semibold mb-11">
          Enhance Your <br />Music Experience
        </h1>
        <div className="flex justify-between max-w-80 mb-10">
          <div className=" bg-white text-black rounded-full w-[62px] h-[62px] flex flex-col justify-center items-center">
            <p className="font-bold">05</p> <p className="text-[11px]">Days</p>
          </div>
          <div className=" bg-white text-black rounded-full w-[62px] h-[62px] flex flex-col justify-center items-center">
            <p className="font-bold">23</p> <p className="text-[11px]">Hours</p>
          </div>
          <div className=" bg-white text-black rounded-full w-[62px] h-[62px] flex flex-col justify-center items-center">
            <p className="font-bold">59</p> <p className="text-[11px]">Minutes</p>
          </div>
          <div className=" bg-white text-black rounded-full w-[62px] h-[62px] flex flex-col justify-center items-center">
            <p className="font-bold">35</p> <p className="text-[11px]">Seconds</p>
          </div>
        </div>
        <button className="w-[170px] h-14 bg-[#00ff66] text-white rounded text-base">Buy Now!</button>
      </div>
      {/* image */}
      <div className=" flex-1 flex justify-center items-center pl-6 mr-[60px]">
        <img src={jbl} alt="JBL" />
      </div>
    </div>
  );
};

export default SecondAD;

import React from "react";
import Items from "../components/Items";
import HeaderAD from "../components/HeaderAD";
import FlashSales from "../components/FlashSales";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";
import SecondAD from "../components/SecondAD/SecondAD";
import ExploreProducts from "../components/ExploreProducts";
import NewArrival from "../components/NewArrival";
import Assurance from "../components/Assurance";
import { IoMdArrowUp } from "react-icons/io";
import { styles } from "../styles";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <>
      <div className={`${styles.marginX}`}>
        {/* section 1 */}
        <div className="flex justify-between">
          <div className="">
            <Items />
          </div>
          <div className="w-[1px] mx-4  bg-slate-300 "></div>
          <div className="sectionimg flex-grow">
            <HeaderAD />
          </div>
        </div>
        {/* section 2 Flash Sales */}
        <div className=" mt-[138px]">
          <FlashSales />
        </div>
        {/* section 3 Categories */}
        <div className="mt-[80px]">
          <Categories />
        </div>
        {/* section 4 Best selling */}
        <div className="mt-[70px]">
          <BestSelling />
        </div>
        {/* section 5 secondAD */}
        <div className="mt-[140px]">
          <SecondAD />
        </div>
        {/* section 6 Exploring Products */}
        <div className="mt-[70px]">
          <ExploreProducts />
        </div>
        {/* section 7 new arrival */}
        <div className="mt-[80px]">
          <NewArrival />
        </div>
      </div>
      {/* section 8 assurance */}
      <div className="mt-[140px] mx-[249px]">
        <Assurance />
      </div>
      {/* back to top button */}
      <div className={`${styles.marginX} mt-[62px] mb-8 flex justify-end`}>
        <div className="flex" >
          <button className="w-[26px] h-[26px] text-xl bg-slate-400 rounded-full flex justify-center items-center" onClick={scrollToTop}>
            <IoMdArrowUp />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

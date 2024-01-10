import React from "react";
import Items from "../components/Items";
import HeaderAD from "../components/HeaderAD";
import FlashSales from "../components/FlashSales";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";
import { styles } from "../styles";

const Home = () => {
  return (
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
    </div>
  );
};

export default Home;

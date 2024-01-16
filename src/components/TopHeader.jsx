import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { useGlobalContext } from "../Context";

const TopHeader = () => {
  const {
    openLanguageBar,
    closeLanguageBar,
    isLanguageBarOpen,
    langList,
    language,
    activeLanguage,
  } = useGlobalContext();
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
        <div className="relative">
          <p className=" mr-1">{language}</p>
          <div className={`${isLanguageBarOpen ? 'flex' : 'hidden'} flex-col absolute bg-black -ml-1 pt-2 pl-1 pr-6 pb-2`}>
            {langList.map((item) => {
              return (
                <div className="cursor-pointer mt-1" key={item.id}>
                  <p onClick={() => activeLanguage(item.id)}>{item.language}</p>
                </div>
              );
            })}
          </div>
        </div>

        <button
          className={`${isLanguageBarOpen ? "hidden" : "flex"} text-xl`}
          onClick={openLanguageBar}
        >
          <RiArrowDownSLine />
        </button>
        <button
          className={`${isLanguageBarOpen ? "flex" : "hidden"} text-xl`}
          onClick={closeLanguageBar}
        >
          <RiArrowUpSLine />
        </button>
      </div>
    </div>
  );
};

export default TopHeader;

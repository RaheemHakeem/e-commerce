import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { RiSearchLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav
        className={`${styles.marginX} h-[92px] flex justify-between pt-9 items-center`}
      >
        <h2 className=" text-2xl font-bold">Exclusive</h2>

        <ul className="flex space-x-12 text-base font-normal">
          <Link>Home</Link>
          <Link>Contact</Link>
          <Link>About</Link>
          <Link>Sign Up</Link>
        </ul>

        <div className="flex space-x-7 justify-center items-center">
          <form className=" relative sm:flex hidden ">
            <input
              type="text"
              className=" bg-[#f5f5f5] text-xs p-2 pr-6"
              placeholder="What are you looking for?"
            />
            <button className="absolute text-base right-2 top-1/2  -translate-y-1/2 ">
              <RiSearchLine />
            </button>
          </form>
          <button>
            <CiHeart className=" text-2xl"/>
          </button>
          <button>
            <BsCart3 className=" text-2xl"/>
          </button>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;

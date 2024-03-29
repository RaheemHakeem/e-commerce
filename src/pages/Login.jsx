import React from "react";
import { FcGoogle } from "react-icons/fc";
import phonecart from "../assets/phonecart.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-[60px] mb-[140px] mr-[135px] flex gap-x-[129px] justify-between">
      <div className="max-w-[705px]">
        <img src={phonecart} alt="phonecart" />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-semibold mb-6 w-full">
          Log in to Exclusive
        </h1>
        <h3 className="text-base mb-12">Enter your details below</h3>

        <form action="" className="flex flex-col">
          <div className="flex flex-col gap-y-10 mb-[40px]">
            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                className=" bg-slate-100 w-full h-8 pl-1"
              />
              <div className=" h-[1px] bg-slate-400"></div>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className=" bg-slate-100 w-full h-8 pl-1"
              />
              <div className=" h-[1px] bg-slate-400"></div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <button className=" w-[143px] h-[56px] bg-[#db4444] rounded text-white text-base ">
              Log In
            </button>
            <p className="text-base text-[#db4444]">Forget Password?</p>
          </div>

          <button className="flex h-[56px] justify-center items-center border border-slate-300 mb-4">
            <FcGoogle className="text-2xl mr-2" />
            <p className="text-base">Log In with Google</p>
          </button>
        </form>

        <div className="flex justify-center">
          <p className="text-base text-slate-500 mr-3">
            Don't have an account?
          </p>
          <div>
            <Link className="text-base text-slate-700 mb-1" to={"/signup"}>
              Register
            </Link>
            <div className=" h-[1px] bg-slate-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

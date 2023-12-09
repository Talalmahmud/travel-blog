import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareSnapchat } from "react-icons/fa6";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" w-full bg-slate-900 mt-20">
      <div className=" w-[95%] mx-auto max-w-[1440px] py-8 flex items-center justify-between ">
        <div className=" flex-1">
          <Link href={"/"}>
            <h1 className=" text-3xl font-extrabold text-light">
              Travel
              <span className=" text-primary p-2">X</span>
            </h1>
          </Link>
        </div>
        <div className=" flex items-center gap-5 text-white">
          <div className=" text-4xl cursor-pointer hover:text-light/40">
            <FaFacebookSquare />
          </div>
          <div className=" text-4xl cursor-pointer hover:text-light/40">
            <FaSquareInstagram />
          </div>
          <div className=" text-4xl cursor-pointer hover:text-light/40">
            <FaSquareXTwitter />
          </div>
          <div className=" text-4xl cursor-pointer hover:text-light/40">
            <FaSquareSnapchat />
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center text-white border-t border-stone-600 p-2">
        @2023 All copyright is reserved TravelX.com{" "}
      </div>
    </div>
  );
};

export default Footer;

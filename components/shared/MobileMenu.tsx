import React from "react";
import { GiCrossedSabres } from "react-icons/gi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareSnapchat } from "react-icons/fa6";

import Link from "next/link";
import { navLinks } from "@/constants";
import Route from "../ui/Route";
import Button from "../ui/Button";
import useMenuActive from "@/hooks/useMenuActive";

type Props = {
  showMobileMenu: boolean;
  setShowMobileMenu?: any;
};

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }: Props) => {
  return (
    <div className=" fixed z-10 top-0 left-0 w-full h-ful bg-light">
      <div
        className=" text-4xl absolute top-6 right-6"
        onClick={() => setShowMobileMenu(false)}
      >
        <GiCrossedSabres />
      </div>

      <div className=" h-full px-6 pt-6 pb-48 w-full sm:w-[45%] bg-white">
        <div className=" flex-1">
          <Link href={"/"}>
            <h1 className=" text-3xl font-extrabold text-secondary">
              Travel
              <span className=" text-primary p-2">X</span>
            </h1>
          </Link>
        </div>

        <div className=" flex flex-col justify-between h-full items-center">
          <div className=" flex justify-center items-center gap-4 border-b border-slate-300 my-10 pb-4">
            <div className=" text-2xl">
              <FaFacebookSquare />
            </div>
            <div className=" text-2xl">
              <FaSquareInstagram />
            </div>
            <div className=" text-2xl">
              <FaSquareXTwitter />
            </div>
            <div className=" text-2xl">
              <FaSquareSnapchat />
            </div>
          </div>

          <div>
            <ul className=" flex flex-col items-center justify-center gap-20  ">
              {navLinks.map((link, index) => {
                const isActive = useMenuActive(link.route);
                return (
                  <li
                    key={index}
                    className=" hover:text-primary active:text-primary visited:text-primary"
                  >
                    <Route
                      route={link.route}
                      label={link.label}
                      isActive={isActive}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className=" my-10 flex flex-col gap-6 items-center justify-center">
            <Button text="Login" aria="Login button" />
            <Button text="Sign Up" aria="Sign up button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

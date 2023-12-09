"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import Route from "../ui/Route";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";
import { FiMenu } from "react-icons/fi";
import useMenuActive from "@/hooks/useMenuActive";

type Props = {};

const Navbar = (props: Props) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <nav className=" w-full p-4">
      <div className=" w-[95%] mx-auto max-w-[1440px] flex items-center justify-between pb-5 border-b border-gray-100 ">
        <div className=" flex-1">
          <Link href={"/"}>
            <h1 className=" text-3xl font-extrabold text-secondary">
              Travel
              <span className=" text-primary p-2">X</span>
            </h1>
          </Link>
        </div>

        <div>
          <ul className=" hidden md:flex items-center gap-16 flex-2  ">
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

        <div className=" flex flex-1 gap-5  justify-end max-md:hidden">
          <Button text="Login" aria="Login button" />
          <Button text="Sign Up" aria="Sign up button" />
        </div>

        <div
          className=" text-4xl block md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <FiMenu />
        </div>
      </div>
      {showMobileMenu && (
        <MobileMenu
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;

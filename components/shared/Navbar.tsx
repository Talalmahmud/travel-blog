"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Route from "../ui/Route";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";
import { FiMenu } from "react-icons/fi";
import useMenuActive from "@/hooks/useMenuActive";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const logout = () => {
    signOut({ callbackUrl: "/login" });
  };
  const login = async () => {
    const res = await signIn();
  };
  const profileHandle = () => {
    router.push("/dashboard/profile");
  };

  useEffect(() => {
    showMobileMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [showMobileMenu]);

  return (
    <nav className=" w-full py-4 sticky z-40 top-0 left-0 bg-light border-b border-gray-200 mb-4">
      <div className=" w-[95%] mx-auto max-w-[1440px] flex items-center justify-between pb-5  ">
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
                  className=" hover:text-primary  active:text-primary visited:text-primary"
                >
                  {link.label === "Profile" ? (
                    <Route
                      route={link.route}
                      label={link.label}
                      isActive={isActive}
                    />
                  ) : (
                    <Route
                      route={link.route}
                      label={link.label}
                      isActive={isActive}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className=" flex flex-1 gap-5  justify-end max-md:hidden">
          {session ? (
            <div className="flex gap-5">
              <Button text="Logout" aria="Login button" onClick={logout} />
              <Button
                text="Profile"
                aria="Login button"
                bgColor="bg-green-600"
                onClick={profileHandle}
              />
            </div>
          ) : (
            <div className="flex gap-5">
              <Button text="Login" aria="Login button" onClick={login} />
              <Button text="Sign Up" aria="Sign up button" />
            </div>
          )}
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

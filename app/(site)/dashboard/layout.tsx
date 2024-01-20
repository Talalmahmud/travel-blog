"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const router = usePathname();
  
  return (
    <div className=" w-[95%] mx-auto max-w-[1440px] h-[100vh] ">
      <div className=" bg-orange-300 h-12 flex justify-center item-center py-4 items-center gap-[24px]">
        <Link href={"/dashboard/profile"}>
          <div
            className={` h-12 flex justify-center items-center ${
              router?.startsWith("/dashboard/profile") && "bg-green-400"
            } px-2`}
          >
            Profile
          </div>
        </Link>
        <Link href={"/dashboard/userblog/viewblog"}>
          <div
            className={` h-12 flex justify-center items-center ${
              router?.startsWith("/dashboard/userblog") && "bg-green-400"
            } px-2`}
          >
            My Blogs
          </div>
        </Link>
      </div>
      <div> {children}</div>
    </div>
  );
};

export default DashboardLayout;

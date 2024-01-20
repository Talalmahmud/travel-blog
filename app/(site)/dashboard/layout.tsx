import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className=" w-[95%] mx-auto max-w-[1440px]">
      <div className=" flex items-center gap-[24px]">
        <Link href={"/dashboard/profile"}>
          <span>Profile</span>
        </Link>
        <Link href={"/dashboard/userblog"}>
          <span>My Blogs</span>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;

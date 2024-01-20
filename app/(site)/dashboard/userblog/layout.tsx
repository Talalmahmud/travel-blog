import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const UserBlogLayout = ({ children }: Props) => {
  return (
    <div className=" flex">
      <div className=" text-[18px] w-[200px] h-[100vh] border-r  border-black ">
        <div className=" flex flex-col gap-2 ">
          <Link href={"/dashboard/userblog/createblog"}>
            <div className=" bg-orange-400 active:bg-orange-200 w-full ">
              Create Blog
            </div>
          </Link>
          <Link href={"/dashboard/userblog/viewblog"} className=" ">
            <div className="bg-orange-400 active:bg-orange-200 w-full ">
              View All Blogs
            </div>
          </Link>
        </div>
      </div>
      <div className="  w-[1240px]"> {children}</div>
    </div>
  );
};

export default UserBlogLayout;

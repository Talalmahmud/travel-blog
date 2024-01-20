import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const UserBlogLayout = ({ children }: Props) => {
  return (
    <div className=" flex ">
      <div className=" flex flex-col gap-4 border-r pr-[16px] border-black">
        <div>
          <Link href={"/dashboard/userblog/viewblog"}>View All Blogs</Link>
        </div>
        <div>
          <Link href={"/dashboard/userblog/createblog"}>Create Blog</Link>
        </div>
      </div>
      <div className=" px-[32px]"> {children}</div>
    </div>
  );
};

export default UserBlogLayout;

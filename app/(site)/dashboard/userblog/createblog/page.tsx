"use client";
import Button from "@/components/ui/Button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const CreateBlog = (props: Props) => {
    const {data:session} = useSession()
    if (!session) {
      redirect("/");
    }
  return (
    <div className=" flex flex-col gap-8 py-2 pl-[32px]">
      <h2 className="text-center font-bold text-xl border-b py-2">
        Create new blog
      </h2>
      <div className=" flex flex-col gap-4">
        <div className="flex gap-4">
          <div>
            <label
              htmlFor="blogImg"
              className=" border rounded-full bg-slate-300 p-2 cursor-pointer"
            >
              Upload your blog image
              <input
                id="blogImg"
                type="file"
                className=" hidden"
                accept=".jpg, .jpeg, .png"
                required
              />
            </label>
          </div>
          <div className=" overflow-auto border-dashed border-black border-[4px]  relative h-[250px] w-[300px] rounded-md">
            <Image src={"/assets/post1.jpg"} fill alt="" />
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <label>Blog Title:</label>
          <input
            type="text"
            className=" text-[18px] p-2 outline-none shadow-md rounded-[10px]"
            placeholder="Enter blog title"
            required
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label>Blog Details:</label>
          <textarea
            rows={10}
            placeholder="Enter blog details"
            className="text-[18px] p-2 outline-none shadow-md rounded-[10px]"
            required
          />
        </div>
        <div>
          <Button text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;

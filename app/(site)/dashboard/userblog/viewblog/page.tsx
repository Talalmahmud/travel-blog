"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const { data: session } = useSession();
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <table className="  w-full border-collapse border ">
        <thead>
          <tr className=" text-xl">
            <th className="border border-slate-300">S.NO.</th>
            <th className="border border-slate-300">Title</th>
            <th className="border border-slate-300">Image</th>
            <th className="border border-slate-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className=" text-md text-center ">
            <td className="border border-slate-300 py-2">1</td>
            <td className="border border-slate-300 py-2">Title</td>
            <td className="border border-slate-300 py-2">Image</td>
            <td className="border flex justify-center items-center gap-2 border-slate-300 py-2">
              <div className=" bg-green-500 cursor-pointer text-white rounded-md px-1">
                view
              </div>
              <div className="bg-orange-500 cursor-pointer text-white rounded-md px-1">
                edit
              </div>
              <div className="bg-red-500 cursor-pointer text-white rounded-md px-1">
                delete
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default page;

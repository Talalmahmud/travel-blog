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

  return <div >Welcome to your dashboard</div>;
};

export default page;

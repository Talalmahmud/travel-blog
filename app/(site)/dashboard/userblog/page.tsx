"use client";
import { useSession } from "next-auth/react";
import React from "react";

type Props = {};

const MyBlog = (props: Props) => {
  const { data: session } = useSession();

  return <div></div>;
};

export default MyBlog;

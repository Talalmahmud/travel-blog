"use client";
import { useSession } from "next-auth/react";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  const { data: session } = useSession();

  return <div>{session?.user?.name}</div>;
};

export default Profile;

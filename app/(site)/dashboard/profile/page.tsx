"use client";
import { useSession } from "next-auth/react";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  const { data: session } = useSession();

  return (
    <div>
      <h2>
        <span className=" text-orange-600 text-xl font-bold">Name: </span>
        {session?.user?.name}
      </h2>
      <h2>
        <span className=" text-orange-600 text-xl font-bold">email: </span>
        {session?.user?.email}
      </h2>
    </div>
  );
};

export default Profile;

import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  route: string;
  isActive?: boolean;
  label: String;
  onClick?: () => void;
  bgColor?: string;
};

const Route = ({ route, isActive, label, onClick, bgColor }: Props) => {
  return (
    <Link
      href={route}
      onClick={onClick}
      className={` ${
        bgColor ? `bg-${bgColor}` : "text-primary"
      }  rounded-md bg-transparent`}
    >
      {label}
    </Link>
  );
};

export default Route;

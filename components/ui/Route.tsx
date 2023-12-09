import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  route: string;
  isActive?: boolean;
  label: String;
  onClick?: () => void;
};

const Route = ({ route, isActive, label, onClick }: Props) => {
  return (
    <Link
      href={route}
      onClick={onClick}
      className={clsx(
        isActive && "text-primary rounded-md bg-transparent",
        !isActive && ""
      )}
    >
      {label}
    </Link>
  );
};

export default Route;

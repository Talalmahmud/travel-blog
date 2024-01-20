import React from "react";

type Props = {
  text: string;
  onClick?: () => void;
  aria?: string;
  bgColor?: string;
};

const Button = ({ text, onClick, aria, bgColor }: Props) => {
  return (
    <button
      onClick={onClick}
      aria-label={aria}
      className={` ${
        bgColor ? `${bgColor}` : "bg-primary"
      }  rounded-lg px-4 py-1 hover:bg-primary/80 text-white w-[150px] md:w-auto `}
    >
      {text}
    </button>
  );
};

export default Button;

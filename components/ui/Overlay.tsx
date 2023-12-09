import React from "react";

type Props = {};

const Overlay = (props: Props) => {
  return (
    <div className=" bg-black/10 w-full h-full absolute top-0 z-0 hover:bg-white/10 duration-500 cursor-pointer"></div>
  );
};

export default Overlay;

import React from "react";

type Props = {
  text: string[];
};

const Tag = ({ text }: Props) => {
  return (
    <>
      <span className=" uppercase bg-primary py-1 px-3 text-white inline-block rounded-md self-center y-2">
        {text}
      </span>
    </>
  );
};

export default Tag;

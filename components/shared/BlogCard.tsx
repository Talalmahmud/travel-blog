import Image from "next/image";
import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import Overlay from "../ui/Overlay";
import Tag from "../ui/Tag";

type Props = {
  title: string;
  image_path: string;
  tagText: string[];
};

const BlogCard = ({ title, tagText, image_path }: Props) => {
  return (
    <div className=" relative overflow-auto w-[375px] lg:w-[800px]  h-[400px] md:h-[500px]">
      <Image
        src={image_path}
        fill
        alt=""
        priority
        className=" w-full h-full rounded-md"
      />
      <div className=" absolute left-2 top-[8px]">
        <Tag text={tagText} />
      </div>
      <div className="absolute left-2 top-[40px] text-2xl font-bold text-light">
        {title}
      </div>
      <div className="  absolute text-5xl cursor-pointer text-light font-extrabold z-2 right-[0px] bottom-0 bg-slate-600">
        <BsArrowReturnRight />
      </div>
      <Overlay />
    </div>
  );
};

export default BlogCard;

import React from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";
import Image from "next/image";
import Overlay from "../ui/Overlay";
import Tag from "../ui/Tag";

type Props = {
  topPost: any;
};

const TopPost = ({ topPost }: Props) => {
  return (
    <div className=" w-full  flex flex-col gap-8  justify-center items-center px-20 ">
      <h2 className=" text-xl uppercase font-semibold border-b border-slate-300">
        Top Post
      </h2>
      {topPost.map((post: any, id: any) => (
        <div
          key={id}
          className=" flex flex-col gap-4 text-center justify-center items-center relative"
        >
          <Link href={{ pathname: `/blog/${post.id}`, query: { ...post } }}>
            <div className=" relative h-72 w-[400px] overflow-auto shadow-xl">
              <Image
                fill
                src={post.image_path}
                alt={`Tag image title ${post.title}`}
                className="h-full w-full object-cover rounded-md"
                priority
              />
              <Overlay />
            </div>
          </Link>

          <Tag text={post.tags} />
          <h2 className=" text-xl px-10 font-extrabold text-tertiary ">
            {post.title}
          </h2>
          <span className=" italic text-sm text-tertiary">
            {post.publishDate}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TopPost;

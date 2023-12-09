import React from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";

type Props = {
  latestPost: any;
};

const LatestPost = ({ latestPost }: Props) => {
  return (
    <div className=" w-full px-20 flex flex-col gap-8 justify-center items-center ">
      <h2 className="text-xl uppercase font-semibold border-b border-slate-300">
        Latest Post
      </h2>
      {latestPost?.map((item: any, index: any) => (
        <div key={index}>
          <Link href={{ pathname: `/blog/${item.id}`, query: { ...item } }}>
            <BlogCard
              tagText={item.tags}
              title={item.title}
              image_path={item.image_path}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LatestPost;

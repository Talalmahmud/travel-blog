import { blogData } from "@/constants/blogData";
import React from "react";
import Tag from "../ui/Tag";
import Image from "next/image";
import Overlay from "../ui/Overlay";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const featuredPosts = blogData.filter((item) => item.featured === true);

  const topFeatured = featuredPosts.slice(0, 1);
  const bottomFeatured = featuredPosts.slice(1, 4);
  return (
    <div className=" relative">
      <div className=" w-[95%] mx-auto max-w-[1440px] z-1 ">
        {topFeatured.map((post, id) => (
          <div
            key={id}
            className="flex flex-col gap-5 mb-5 text-center relative"
          >
            <Tag text={post.tags} />
            <h2 className=" text-6xl font-extrabold uppercase text-tertiary">
              {post.title}
            </h2>
            <div className=" flex gap-4 italic justify-center items-center">
              <div className=" relative overflow-auto h-10 w-10 rounded-full bg-black">
                <Image
                  fill
                  src={post.authorImage}
                  alt={`Tag image title ${post.title}`}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <span>{post.authorName}</span>
              <span>{post.publishDate}</span>
            </div>
            <Link href={{ pathname: `/blog/${post.id}`, query: { ...post } }}>
              <div className=" relative h-[600px] overflow-auto shadow-xl">
                <Image
                  fill
                  src={post.image_path}
                  alt={`Tag image title ${post.title}`}
                  className="h-full w-full object-cover"
                  priority
                />
                <Overlay />
              </div>
            </Link>
          </div>
        ))}

        <div className=" grid grid-cols-1 xl:grid-cols-3  gap-8 ">
          {bottomFeatured.map((post, id) => (
            <div key={id} className=" flex flex-col gap-4 text-center relative">
              <Link href={{ pathname: `/blog/${post.id}`, query: { ...post } }}>
                <div className=" relative h-72 overflow-auto shadow-xl">
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
      </div>
    </div>
  );
};

export default Hero;

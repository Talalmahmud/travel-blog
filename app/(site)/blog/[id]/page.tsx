import Image from "next/image";
import { type } from "os";
import React from "react";

type Props = {
  id: string;
  title: string;
  image_path: string;
  featured: boolean;
  topPost: string;
  paragraph: string;
  tags: string;
  authorImage: string;
  authorName: string;
  publishDate: string;
};
const page = ({ searchParams }: { searchParams: Props }) => {
  const {
    id,
    title,
    image_path,
    featured,
    topPost,
    paragraph,
    tags,
    authorImage,
    authorName,
    publishDate,
  } = searchParams;
  return (
    <div className=" w-[95%] mx-auto max-w-[1440px]">
      <div className=" flex justify-between">
        <h2 className=" text-lg md:text-3xl py-4 italic text-black/40">
          <span className=" text-red-600">Title:</span> {title}
        </h2>

        <div className=" hidden md:flex  flex-col gap-2 italic justify-center ">
          <div className=" flex items-center">
            <div className=" relative overflow-auto h-10 w-10 rounded-full bg-black">
              <Image
                fill
                src={authorImage}
                alt={`Tag image title ${title}`}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <span>{authorName}</span>
          </div>
          <h2>
            <span className="font-bold not-italic">Date: </span>
            {publishDate}
          </h2>
        </div>
      </div>
      <div className=" relative overflow-auto h-[600px] w-full">
        <Image
          src={image_path}
          fill
          className="w-full h-full"
          alt={`Image title is${title}`}
          priority
        />
      </div>
      <div className=" flex gap-4 italic py-2 items-center">
        <div className=" relative overflow-auto h-10 w-10 rounded-full bg-black">
          <Image
            fill
            src={authorImage}
            alt={`Tag image title ${title}`}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <span>{authorName}</span>
        <span>{publishDate}</span>
      </div>

      <p className=" italic text-sm">
        <span className=" not-italic bold text-lg">Description: </span>
        {paragraph}
      </p>
    </div>
  );
};

export default page;

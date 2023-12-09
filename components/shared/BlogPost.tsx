import React from "react";
import TopPost from "./TopPost";
import LatestPost from "./LatestPost";
import { blogData } from "@/constants/blogData";

type Props = {};

const BlogPost = (props: Props) => {
  const topPost = blogData.filter((item) => item.topPost === true);
  const latestPost = blogData.slice(5, 10);

  return (
    <div className=" w-[95%] mx-auto max-w-[1440px] flex flex-col items-start lg:flex-row mt-10 ">
      <div className=" w-full lg:w-[70%] flex justify-center items-center">
        <div>
          <LatestPost latestPost={latestPost} />
        </div>
      </div>

      <div className=" w-full lg:w-[30%] flex justify-center items-center ">
        <div>
          <TopPost topPost={topPost.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

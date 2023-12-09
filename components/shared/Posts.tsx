import React from "react";
import BlogPost from "./BlogPost";

type Props = {};

const Posts = (props: Props) => {
  return (
    <div className=" w-[95%] mx-auto max-w-[1440px]">
      <BlogPost />
    </div>
  );
};

export default Posts;

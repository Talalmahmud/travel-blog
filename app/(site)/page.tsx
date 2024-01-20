import BlogPost from "@/components/shared/BlogPost";
import Hero from "@/components/shared/Hero";
import prisma from "@/lib/prisma";
import React from "react";

type Props = {};

async function getBlogs() {
  const blogs = await prisma.blog.findMany();
  return blogs;
}

const Home = async (props: Props) => {
  const getBlogPost = await getBlogs();
  console.log(getBlogPost);
  return (
    <>
      <p>{getBlogPost[0].title}</p>
      <Hero />

      <BlogPost />
    </>
  );
};

export default Home;

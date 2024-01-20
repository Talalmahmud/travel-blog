"use client";
import BlogPost from "@/components/shared/BlogPost";
import Hero from "@/components/shared/Hero";
import LatestPost from "@/components/shared/LatestPost";
import TopPost from "@/components/shared/TopPost";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />

      <BlogPost />
    </>
  );
};

export default Home;

import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const getAllBlogs = await prisma.blog.findMany();
  console.log(getAllBlogs);
  return getAllBlogs;
}

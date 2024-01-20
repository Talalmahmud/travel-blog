import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const getAllBlogs: any = await prisma?.blog?.findMany();

  return Response.json({ getAllBlogs });
}

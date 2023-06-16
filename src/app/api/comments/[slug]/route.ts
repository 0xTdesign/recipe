import { getComments, saveComment } from "@/app/lib/comments";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  // get all the posts
  const slug = params.slug;
  const comments = await getComments(slug);
  return NextResponse.json({ comments });
}

export async function POST(request: NextRequest, { params }: { params: { slug: string } }) {
  //create a new function
  const slug = params.slug;
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const comment = formData.get("comment") as string;
  await saveComment(username, comment, slug);
  return NextResponse.json("Comment saved");
}

import { connectDB } from "@/lib/utils";
import { Post } from "@/models/post";

import { NextResponse } from "next/server";

export const GET = async (request: any, { params }: { params: any }) => {

  const { slug }: { slug: any } = params;

  try {
    connectDB()

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);

  } catch (error) {
    console.log(error);
    throw new Error('failed to get post')
  }
}


export const DELETE = async (request: any, { params }: { params: any }) => {

  const { slug }: { slug: any } = params;

  try {
    connectDB()

    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");

  } catch (error) {
    console.log(error);
    throw new Error('failed to delete post')
  }
}
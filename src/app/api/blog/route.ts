import { connectDB } from "@/lib/utils";
import { Post } from "@/models/post";

import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectDB()

    const posts = await Post.find();
    return NextResponse.json(posts);

  } catch (error) {
    console.log(error);
    throw new Error('failed to get posts')
  }
}
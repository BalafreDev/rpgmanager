import Postcard from "@/components/Postcard";
import PostUser from "@/components/postUser/postUser";
import { getPosts } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "Blog Page Description",
}

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch(`${process.env.CLIENT_URL}/api/blog`);

  if (!res.ok) {
    throw new Error("Something went wrong!")
  }
  return res.json()
}


export default async function BlogPage({ params, searchParams }: { params: string, searchParams: string }) {

  const posts = await getData()
  // const posts = await getPosts()
  return (
    <div>
      {posts.map((post: any) => (
        <div key={post._id}>
          <Postcard post={post} />
        </div>

      ))
      }
    </div >
  )
}
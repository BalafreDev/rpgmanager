import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";
import { Suspense } from "react";


// FETCH DATA WITH AN API
// const getData = async (slug: any) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache: "no-store"});

//   if (!res.ok) {
//     throw new Error("Something went wrong!")
//   }
//   return res.json()
// }

export default async function SinglePost({ params }: { params: any }) {

  const { slug } = params

  // const post = await getData(slug)
  const post = await getPost(slug)  

  return (
    <div>
      <h1>
        {post?.title}
      </h1>
      {post && <Suspense fallback={<div>Loading...</div>}>
        <PostUser userId={post?.userId} />
      </Suspense>}
      <p>
        {post?.desc}
      </p>
    </div>
  )
}
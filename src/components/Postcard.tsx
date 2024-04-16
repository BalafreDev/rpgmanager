import Link from "next/link";

export default function Postcard({ post }: any) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <div>
        <div>
          <Link href={`/blog/${post.slug}`}>READ MORE</Link>
        </div>
      </div>
    </div>
  )
}
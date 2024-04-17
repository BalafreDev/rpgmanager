import CharactersList from "@/components/charactersList/CharactersList";
import styles from "./characters.module.css"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters List Page",
  description: "Characters List Description",
}

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');	

  if (!res.ok) {
    throw new Error("Something went wrong!")
  }

  return res.json()
}

export default async function Characters() {  

  const posts = await getData()

  return (
    <div>
      <h1>My Characters</h1>
      <CharactersList />
      <div>
        {posts.map((post: any) => (
          <div className={styles.post} key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
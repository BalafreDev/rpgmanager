import { getUser } from "@/lib/data"
import styles from "./postUser.module.css"

// const getData = async (userId: any) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong!")
//   }
//   return res.json()
// }

export default async function PostUser({userId}: {userId: number}) {

  // const user = await getData(userId)
  const user = await getUser(String(userId))
  return (
    <div className={styles.constainer}>
      <span className={styles.title}>Author : </span>
      <span className={styles.username}>{user?.username}</span>
    </div>
  )
}
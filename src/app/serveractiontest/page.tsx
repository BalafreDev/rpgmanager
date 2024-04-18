import { addPost, deletePost } from "@/lib/action";
import styles from './serveractiontest.module.css'

export default function ServeractiontestPage() {

  // const actionInComponent = async () => {
  //   "use server"
  //   console.log("It works");
  // }

  return (
    <div>
      <form action={addPost} className={styles.container}>
        <input type="text" placeholder="title" name="title"/>
        <input type="text" placeholder="desc" name="desc"/>
        <input type="text" placeholder="slug" name="slug"/>
        <input type="text" placeholder="userId" name="userId"/>
        <button>Create Post</button>
      </form>
      <form action={deletePost} className={styles.container}>
        <input type="text" placeholder="postId" name="id"/>
        <button>Delete Post</button>
      </form>
    </div>
  )
}
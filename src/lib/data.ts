import dbConnect from "./dbConnect"
import { User } from "@/models/user"
import { Post } from "@/models/post"
import { unstable_noStore as noStore } from "next/cache"

// TEMPORARY DATA
// const users = [
//   {id:1, name:"John"},
//   {id:2, name:"Jane"},
// ]


// const posts = [
//   {id:1, title:"Post 1", body:"Content of post 1...", userId:1},
//   {id:2, title:"Post 2", body:"Content of post 2...", userId:1},
//   {id:3, title:"Post 3", body:"Content of post 3...", userId:1},
//   {id:4, title:"Post 4", body:"Content of post 4...", userId:2},
//   {id:5, title:"Post 5", body:"Content of post 5...", userId:2},
//   {id:6, title:"Post 6", body:"Content of post 6...", userId:2},
// ]

export const getPosts = async () => {
  try {
    dbConnect()
    const posts = await Post.find()
    return posts
  } catch (error) {
    console.log(error)
    throw new Error("Failed to get posts !")
  }
}

export const getPost = async (slug: string) => {
  try {
    dbConnect()
    const post = await Post.findOne({ slug })
    return post
  } catch (error) {
    console.log(error)
    throw new Error("Failed to get post !")
  }
}

export const getUsers = async () => {
  try {
    dbConnect()
    const users = await User.find()
    return users
  } catch (error) {
    console.log(error)
    throw new Error("Failed to get users !")    
  }
}

export const getUser = async (id: string) => {
  noStore()
  try {
    dbConnect()
    const user = await User.findById(id)
    return user
  } catch (error) {
    console.log(error)
    throw new Error("Failed to get user !")    
  }
}
'use server'
import { Post } from "@/models/post";
import { connectDB } from "./utils";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { User } from "@/models/user";
import { genSalt, genSaltSync, hash, hashSync } from "bcrypt-ts";

export const addPost = async (formData: any) => {

  // const title = formData.get('title')
  // const desc = formData.get('desc')
  // const slug = formData.get('slug')

  const { title, desc, slug, userId } = Object.fromEntries(formData)

  // console.log(title, desc, slug, userId);
  
  try {
    connectDB()
    const newPost = new Post({
      title,
      desc,
      slug,
      userId
    })
    await newPost.save()
    console.log('saved to db');
    revalidatePath('/blog')
    
  } catch (error:any) {
    console.log(error);
    return {error: error.message}
    
  }
}

export const deletePost = async (formData: any) => {

  const { id } = Object.fromEntries(formData)
  
  try {
    connectDB()
    await Post.findByIdAndDelete(id)
    console.log('post deleted from db');
    revalidatePath('/blog')
    
  } catch (error:any) {
    console.log(error);
    return {error: error.message}
    
  }
}

export const handleGithubLogin = async () => {
  await signIn("github")
  }

export const handleLogout = async () => {
  await signOut()
  }

export const register = async (formData: any) => {
  const { username, email, password, passwordRepeat } = Object.fromEntries(formData)

  if (password !== passwordRepeat) {
    return { error: "Passwords don't match" }
  }
  try {
    connectDB()
    const user = await User.findOne({username})

    if (user) {
      return "Username already exists"
    }

    const salt = await genSalt(10)
    const hashedPassword = hashSync(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    })

    await newUser.save()
    console.log("Saved to db");
    
  } catch (error) {
    console.log(error);
    return {error: "Something went wrong"}
    
  }
}
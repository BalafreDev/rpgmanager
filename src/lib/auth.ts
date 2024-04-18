import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectDB } from "./utils"
import { User } from "@/models/user"


export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  providers: [GitHub({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }),],
  callbacks: {
    async signIn({user, account, profile}: any) {
      console.log(profile)
      if (account.provider === "github") {
        connectDB()
        try {
          const user = await User.findOne({ email: profile.email })
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              picture: profile.avatar_url,
            })
            await newUser.save()
          }
        } catch (error) {
          console.log(error);
          return false
        }
      }
      return true
    },
  },
})
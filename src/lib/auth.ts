import NextAuth from "next-auth"
import google from "next-auth/providers/google"
// import GitHub from "next-auth/providers/github"
import { connectDB } from "./utils"
import { User } from "@/models/user"


export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  providers: [
    google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // GitHub({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
  ],
  callbacks: {
    async signIn({ user, account, profile }: any) {
      if (account.provider === "google") {

        connectDB()
        try {
          const user = await User.findOne({ email: profile.email })
          if (!user) {
            const newUser = new User({
              username: `${profile.given_name} ${profile.family_name}`,
              email: profile.email,
              picture: profile.picture,
            })
            await newUser.save()
          }
        } catch (error) {
          console.log(error);
          return false
        }
      }
      // else if (account.provider === "github") {
      //   connectDB()
      //   try {
      //     user = await User.findOne({ email: profile.email })
      //     if (!user) {
      //       const newUser = new User({
      //         username: profile.login,
      //         email: profile.email,
      //         picture: profile.avatar_url,
      //       })
      //       await newUser.save()
      //     }
      //   } catch (error) {
      //     console.log(error);
      //     return false
      //   }
      // }
      return true
    },
  },
})
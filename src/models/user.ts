import mongoose from 'mongoose'
// import { isEmail } from 'validator'

// export interface IUsers extends mongoose.Document {
//   pseudo: string
//   email: string
//   password: string
//   picture: string
//   friends: any
//   friendsRequests: string[]
//   friendsRequested: string[]
//   groupsCreated: string[]
//   characters: string[]
//   timestamps: string
// }

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 50,
      // trim: true,
    },
    email: {
      type: String,
      required: true,
      // validate: [isEmail],
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    picture: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
    },
    friends: {
      type: Array,
    },
    friendsRequests: {
      type: [String],
    },
    friendsRequested: {
      type: [String],
    },
    groupsCreated: {
      type: [String],
    },
    characters: {
      type: [String],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

// export default mongoose.models.User || mongoose.model<IUsers>('User', UserSchema)
// export default mongoose.models.User || mongoose.model('User', UserSchema)
export const User = mongoose.models?.User || mongoose.model('User', UserSchema)

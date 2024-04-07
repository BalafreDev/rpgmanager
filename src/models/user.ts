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
    pseudo: {
      type: String,
      // required: [true, 'Veuillez inscrire un pseudo.'],
      minlength: [3, 'Pseudo trop court.'],
      maxLength: [20, 'Pseudo trop long.'],
      trim: true,
    },
    email: {
      type: String,
      // required: true,
      // validate: [isEmail],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      // required: true,
      max: 1024,
      minlength: 6,
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
  },
  {
    timestamps: true,
  }
)

// export default mongoose.models.User || mongoose.model<IUsers>('User', UserSchema)
export default mongoose.models.User || mongoose.model('User', UserSchema)

import  mongoose  from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    picture: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

// export default mongoose.models.User || mongoose.model<IUsers>('User', UserSchema)
// export default mongoose.models.User || mongoose.model('User', UserSchema)
export const Post = mongoose.models.Post || mongoose.model('Post', UserSchema)
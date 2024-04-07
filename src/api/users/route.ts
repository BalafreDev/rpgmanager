import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect"
import User from "@/models/user";
import { NextResponse } from "next/server";


// export async function GET() {
//   await dbConnect()

//       try {
//         const users = await User.find({}); /* find all the data in our database */
//         return NextResponse.json({ success: true, data: users });
//       } catch (error) {
//         return NextResponse.json({ success: false, error });
//       }

// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect()
  if (req.method === 'GET') {
    try {
      const users = await User.find({}); /* find all the data in our database */
      return NextResponse.json({ success: true, data: users });
    } catch (error) {
      return NextResponse.json({ success: false, error });
    }
  }
  else {
    // await dbConnect()

    try {

    } catch (error) {

    }

  }
}
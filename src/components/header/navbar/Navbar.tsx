import { auth } from "@/lib/auth"
import Links from "./Links"

export default async function Navbar() {

  const session:any = await auth()
  console.log(session);
  


  return (
    <div>
      <Links session={session}/>
    </div>
  )
}
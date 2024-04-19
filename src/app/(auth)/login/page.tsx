import {handleGoogleLogin } from "@/lib/action";

export default async function Login() {

  return (
    <div>
      <form action={handleGoogleLogin}>
        <button>Login with Google</button>
      </form>
      {/* <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form> */}
    </div>
  )
}
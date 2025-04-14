import Appbar from "@/components/Appbar";
import { getServerSession } from "next-auth";

export default async function LoginPage() {
  const session = await getServerSession();

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <Appbar />

        <div>user component -server : {JSON.stringify(session)}</div>
      </form>
    </div>
  );
}
// This is a simple login page component in Next.js.

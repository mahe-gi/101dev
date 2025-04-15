import Appbar from "@/components/Appbar";
import { getServerSession } from "next-auth";

export default async function Signin() {
  const session = await getServerSession();

  return (
    <div>
      <Appbar />
      <div>user component -server : {JSON.stringify(session)}</div>
    </div>
  );
}
// This is a simple login page component in Next.js.
